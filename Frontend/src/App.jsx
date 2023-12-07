import './App.css'
import { Routes, Route } from 'react-router-dom'

//Pages
import { EditPerfilPage } from './pages/User/EditPerfilPage'
import { CreatePinPage } from './pages/User/CreatePinPage'
import { PerfilPage } from './pages/User/PerfilPage'
import { HomePage } from './pages/home/HomePage'
import Login from './pages/auth/Login'

//Components
import { Header } from './components/shared/Header'
import { NavBar } from './components/shared/NavBar'

function App() {
  return (
    <>
      <Header />
      <main className='container mx-auto pt-20 pb-12 lg:pb-0'>

        <Routes>

          <Route path='/' element={<HomePage />}/>

          <Route path='/login' element={<Login/>}/>

          <Route path='/pin-create' element={<CreatePinPage />}/>
          <Route path='/settings-perfil' element={<EditPerfilPage />}/>
          <Route path='/perfil' element={<PerfilPage />}/>

          
        </Routes>

      </main>
      <NavBar />
    </>
  )
}

export default App
