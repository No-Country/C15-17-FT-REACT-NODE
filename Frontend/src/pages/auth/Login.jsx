import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const Login = () => {


    const { singin } = useAuth()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const onHandleLogin = async (e) => {
        e.preventDefault();

        if(!username || !password)  {
            alert('deberia llenar los datos')
            return
        }

        const credentials = {
            name: username,
            password: password
        }
       await singin(credentials)

    };

    return (
        <div className='content'>
            <h1>inicia sesión</h1>
            <form onSubmit={onHandleLogin}>
                <div className='content_label'>
                    <label className='form_label'>
                        <span className='label_span'>Usuario</span>
                        <input
                            name='usuario'
                            type='text'
                            className='input_form'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label className='form_label'>
                        <span className='label_span'>Contraseña</span>
                        <input
                            name='password'
                            type='password'
                            className='input_form'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                </div>
                <div className='content_btn'>
                    <button type='submit' className='btn login'>
                        Entrar
                    </button>
                    <div className='content_divisor'>
                        <div className='divisor'></div>
                        <span className='text'>Ó</span>
                        <div className='divisor'></div>
                    </div>
                    <button type='submit' className='btn register'>
                        Registrarse
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Login;
