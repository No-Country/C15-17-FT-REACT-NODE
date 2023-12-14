
import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {


    const { signup } = useAuth()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");




    const onHandleRegister = async (e) => {
        e.preventDefault();
        
        if(!username || !email || !password) {
            alert('Deberia llenar los campos')
            return
        }

        const credentials = {
            name: username,
            email: email,
            password: password,
        };

        await signup(credentials)
        
       
    };

    // Dar estilos a inputs cuando isError sea true

    return (
        <div className='content'>
            <h1>Registrarte</h1>
            <form >
                <div className='content_label'>
                    <label className='form_label'>
                        <span className='label_span'>Usuario</span>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            name='usuario'
                            type='text'
                            className='input_form'
                            required
                        />
                    </label>
                    <label className='form_label'>
                        <span className='label_span'>Email</span>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            type='email'
                            className='input_form'
                            required
                        />
                    </label>
                    <label className='form_label'>
                        <span className='label_span'>Contraseña</span>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            name='password'
                            type='password'
                            className='input_form'
                            required
                        />
                    </label>
                </div>
                <div className='content_btn'>
                    <button type='submit' className='btn register' onClick={onHandleRegister}>
                        Registrarme
                    </button>
                    <div className='content_divisor'>
                        <div className='divisor'></div>
                        <span className='text'>Ó</span>
                        <div className='divisor'></div>
                    </div>
                    <button type='submit' className='btn login'>
                        Tengo Cuenta
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Register;
