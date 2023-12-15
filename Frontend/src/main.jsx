import { QueryClientProvider, QueryClient } from 'react-query'
import { AuthProvider } from './context/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <App />
          <ToastContainer autoClose={2500}/>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
)