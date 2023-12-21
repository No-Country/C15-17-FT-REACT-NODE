import './App.css'
import { Routes, Route } from 'react-router-dom'

//Pages
import { EditPerfilPage } from './pages/User/EditPerfilPage'
import { DetailPagePin } from './pages/home/DetailPinPage'
import { CreatePinPage } from './pages/User/CreatePinPage'
import { ExplorePage } from './pages/home/ExplorePage'
import { LandingPage } from './pages/home/LandingPage'
import { PerfilPage } from './pages/User/PerfilPage'
import { SearchPage } from './pages/home/SearchPage'
import { HomePage } from './pages/home/HomePage'
import { TeamPage } from './pages/home/TeamPage'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'

//Layouts
import { HomeLayout } from './layouts/HomeLayout'
import { AuthLayout } from './layouts/AuthLayout'

//Hook
import { useAuth } from './hooks/useAuth'

function App() {

  const { isAuth } = useAuth()

  return (
    <>
          <Routes>
            <Route path='/' element={<HomeLayout />}>

                <Route index element={ isAuth ? <HomePage /> : <LandingPage />}/>
                <Route path='explore' element={<ExplorePage />}/>
                <Route path='search' element={<SearchPage />}/>
                <Route path='explore/team/:team' element={<TeamPage />}/>
                <Route path='pin-create' element={<CreatePinPage />}/>
                <Route path='settings-perfil' element={<EditPerfilPage />}/>
                <Route path='perfil/:userId' element={<PerfilPage />}/>
                <Route path='pin/:id' element={<DetailPagePin />}/>

            </Route>

            <Route path='/auth' element={<AuthLayout />}>

              <Route path='login' element={<Login/>}/>
              <Route path='register' element={<Register/>}/>

            </Route>


            
          </Routes>
    </>
  )
}

export default App
