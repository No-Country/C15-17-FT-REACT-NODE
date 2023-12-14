import { api } from "../../services/auth.services";
import { create } from "zustand";
import Cookies from "js-cookie";
import { jwtDecode } from 'jwt-decode'
import { getUser } from "../../services/user.services";

const expires = new Date(new Date().getTime() + 10 * 60 * 1000);


export const useAuth = create((get, set) => ({
    isAuth : false,
    user : {},

    singin : async (credentials) => {
        try {
            const user = await api.singin({ credentials })
            const token = user.acess_token

            Cookies.set("token", token, {
                expires,
              });

            set({ isAuth: true, user });
            console.log('Success auth')

        } catch (error) {
            console.log(error)
            set({ isAuth: false, user : {} });
            console.log('error auth')



        }
    },
    signup : async (credentials) => {
        try {
            const user = await api.signup({ credentials })
            const token = user.acess_token
            Cookies.set("token", token, {
                expires,
              });
            set({ isAuth: true, user });
        } catch (error) {
            console.log(error)
            set({ isAuth: false, user : {} });

        }
    },
    signout : () => {
        Cookies.remove('token')
        set({ isAuth: false, user : {} });
    },

    checkAuth : async () => {
        const token = Cookies.get("token");

        if(!token) {
            set({isAuth : false, user : {}})
            return
        }

        try {
            
            const decodedToken = jwtDecode(token);
            const id = decodedToken?.data?._id
            const user = await getUser({ id })
            set((state) => ({...state, isAuth : true, user}))
            console.log('Success auth check')
            
        } catch (error) {
            set({isAuth : false, user : {}})
            console.log(error)
            console.log('error auth')

        }
    },
    setAuth : (data) => set({ data })
    

   


}))