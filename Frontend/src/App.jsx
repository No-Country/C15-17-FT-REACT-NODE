import { Routes, Route } from 'react-router-dom'

//Pages
import { EditPerfilPage } from './pages/User/EditPerfilPage'
import { CreatePinPage } from './pages/User/CreatePinPage'
import { PerfilPage } from './pages/User/PerfilPage'

//Components
import { Header } from './components/shared/Header'

function App() {
  return (
    <>
      <Header />
      <main className='container mx-auto pt-24 '>

        <Routes>

          <Route path='/pin-create' element={<CreatePinPage />}/>
          <Route path='/settings-perfil' element={<EditPerfilPage />}/>
          <Route path='/perfil' element={<PerfilPage />}/>
          
        </Routes>

      </main>
    </>
  )
}

export default App
