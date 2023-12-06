import { Routes, Route } from 'react-router-dom'

//Pages
import { CreatePinPage } from './pages/User/CreatePinPage'
import { PerfilPage } from './pages/User/PerfilPage'

//Components
import { Header } from './components/shared/Header'

function App() {
  return (
    <>
      <Header />
      <main className='container mx-auto pt-24 pb-12'>

        <Routes>

          <Route path='/perfil' element={<PerfilPage />}/>
          <Route path='/pin-create' element={<CreatePinPage />}/>
          
        </Routes>

      </main>
    </>
  )
}

export default App
