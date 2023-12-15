import { useAuth } from "../hooks/useAuth"
import { Navigate } from 'react-router-dom'

export function ProtectedRoutes({ children }) {

  const { isAuth } = useAuth()

  if (!isAuth) return <Navigate to='/auth/login'/>

  return (
    <>
        {children}
    </>
  )
}
