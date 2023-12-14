import { getUser } from "../services/user.services";
import { api } from "../services/auth.services";
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { createContext } from "react";
import { jwtDecode } from 'jwt-decode'

import Cookies from "js-cookie";

export const AuthContext = createContext({});

const expires = new Date(new Date().getTime() + 10 * 60 * 1000);

export function AuthProvider ({ children }) {
    const navigate = useNavigate()
    const [isLoading, setIsLoading] = useState(false)
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

        const singin = async (credentials) => {
            try {
                const user = await api.singin({ credentials })
                const token = user.acess_token
    
                Cookies.set("token", token, {
                    expires,
                  });
    
                setData({
                    user : user,
                    isAuth : true
                });

                navigate('/')
    
            } catch (error) {
                console.log(error)
                setData({
                    user : {},
                    isAuth : false
                });
    
            }
        }

        const signup =  async (credentials) => {
            try {
                const user = await api.signup({ credentials })
                const token = user.acess_token
                Cookies.set("token", token, {
                    expires,
                  });
                setData({
                    user : user,
                    isAuth : true
                });

                navigate('/')
            } catch (error) {
                console.log(error)
                setData({
                    user : {},
                    isAuth : false
                });
    
            }
        }

        const signout = () => {
            Cookies.remove('token')
            setData({
                user : {},
                isAuth : false
            });
        }

        return (
            <AuthContext.Provider
              value={{
                isAuth : data.isAuth,
                user : data.user,
                isLoading,
                signout,
                singin,
                signup
              }}
            >
              {children}
            </AuthContext.Provider>
          );
}