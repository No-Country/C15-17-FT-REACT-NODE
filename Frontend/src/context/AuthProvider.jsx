import { getUser } from "../services/user.services";
import { api } from "../services/auth.services";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { createContext } from "react";
import { jwtDecode } from 'jwt-decode'
import { toast } from 'react-toastify'

import Cookies from "js-cookie";

export const AuthContext = createContext({});


export function AuthProvider ({ children }) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState({
        user : {},
        isAuth : false,
    })

    useEffect(() => {
        (async () => {
          setIsLoading(true);
          const token = Cookies.get("token");
    
          if (!token) {
            setData({
                user : {},
                isAuth : false
            });
            setIsLoading(false);
            return;
          }
    
          try {
            const decodedToken = jwtDecode(token);
            const id = decodedToken?.data?._id;
            const user = await getUser({id})
            setData({
                user : user,
                isAuth : true
            });
            setIsLoading(true)

          } catch (error) {
            console.error("Error en el servidor: ", error);
            setData({
                user : {},
                isAuth : false
            });
          } finally {
            setIsLoading(false);
          }
        })();
    },[])

      const expiresToken = () => { // expira despues de 6 dias
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 6);
        return expirationDate;
      };

      const singin = async (credentials) => {
            try {
                const response = await api.singin({ credentials })
                if( response.error ) {
                  return response
                }

                const token = response.acess_token
                const expires = expiresToken();
                Cookies.set("token", token, {
                    expires,
                  });
    
                setData({
                    user : response.user,
                    isAuth : true
                });

                navigate('/')
                toast.success(`Bienvenido de vuelta ${response.user.name}`)
    
            } catch (error) {
                console.log(error)
               
                setData({
                    user : {},
                    isAuth : false
                });
                toast.error('Ocurrio un erro en los servidores de PictureFlow')
    
            }
      }

      const signup =  async (credentials) => {
            try {
                const response = await api.signup({ credentials })

                if( response.error ) {
                  return response
                }
                const token = response.acess_token
                const expires = expiresToken();
                Cookies.set("token", token, {
                    expires,
                  });
                setData({
                    user : response.newUser,
                    isAuth : true
                });

                navigate('/')
                toast.success('Bienvenido a PictureFlow, descubre la grandeza del futbol argentino!')

            } catch (error) {
                console.log(error)
                setData({
                    user : {},
                    isAuth : false
                });
                toast.error('Ocurrio un erro en los servidores de PictureFlow')
            }
      }

      const signout = () => {
            Cookies.remove('token')
            setData({
                user : {},
                isAuth : false
            });
            navigate('/')
            toast.success('Nos vemos! PictureFlow te espera.' )
      }

      const onSave = ({ saves }) => {
        const dataUser = structuredClone(data.user)
        const newSaves = {
          ...dataUser,
          saves
        }

        setData(prevValues => ({
          ...prevValues,
          user : newSaves
        }))
      }

      const onEditUser = ({ newCredentials }) => {
        const dataUser = structuredClone(data.user);  // Suponiendo que structuredClone funciona como se espera
      
        const updateUser = {
          ...dataUser,
          ...newCredentials,
        };
      
        console.log('Aca esta lo del context', updateUser);
      
        setData((prevValues) => ({
          ...prevValues,
          user: updateUser,
        }));
      }

      return (
          <AuthContext.Provider
              value={{
                isAuth : data.isAuth,
                user : data.user,
                isLoading,
                signout,
                singin,
                signup,
                onSave,
                onEditUser
              }}
            >
              {children}
          </AuthContext.Provider>
        );
}