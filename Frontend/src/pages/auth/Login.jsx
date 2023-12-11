import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigation = useNavigate();

    const URL = "URL A MODIFICAR";

    const onHandleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const userData = {
                usuario: username,
                password: password,
            };

            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
            });
            const responseData = await response.json();
            console.log(responseData);

            if (responseData) {
                setUsername("");
                setPassword("");
                setIsLoading(false);
                // retornar error al usuario 
                return;
            }

            if (isLoading) navigation("/home");

        } catch (error) {
            console.error(error);
            Alert.alert("Error", "Ocurrió un error al iniciar sesión.");
        }
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
                            value={username}
                        />
                    </label>
                    <label className='form_label'>
                        <span className='label_span'>Contraseña</span>
                        <input
                            name='password'
                            type='password'
                            className='input_form'
                            value={password}
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
