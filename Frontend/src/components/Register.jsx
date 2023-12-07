import { useState } from "react";

const Register = () => {
    const [login, setLogin] = useState({})

    function handlerSubmit(e) {
        e.preventDefault();
        const usuario = {
            usuario: e.target.usuario.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }
        setLogin(usuario);
    }
    console.log(login);

    return (
        <div className='content'>
            <h1>Registrarte</h1>
            <form onSubmit={handlerSubmit}>
                <div className='content_label'>
                    <label className='form_label'>
                        <span className='label_span'>Usuario</span>
                        <input
                            name='usuario'
                            type='text'
                            className='input_form'
                            required
                        />
                    </label>
                    <label className='form_label'>
                        <span className='label_span'>Email</span>
                        <input
                            name='email'
                            type='email'
                            className='input_form'
                            required
                        />
                    </label>
                    <label className='form_label'>
                        <span className='label_span'>Contraseña</span>
                        <input
                            name='password'
                            type='password'
                            className='input_form'
                            required
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

export default Register;
