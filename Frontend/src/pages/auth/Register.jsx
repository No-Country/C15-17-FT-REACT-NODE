import { useState } from "react";

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isError, setIsError] = useState(false);

    const navigation = useNavigate();

    const URL = "URL A MODIFICAR";

    const onHandleRegister = async () => {
        console.log("Se Preciono button");

        if (password && username && email) {
            try {
                const userData = {
                    name: username,
                    email: email,
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

                if (responseData) navigation("/login");
            } catch (error) {
                // Manejar errores, como mostrar un mensaje de error al usuario.
                console.error(error);
            }
        } else {
            setIsError(true);
            console.log("Faltan datos.");
        }
    };

    // Dar estilos a inputs cuando isError sea true

    return (
        <div className='content'>
            <h1>Registrarte</h1>
            <form onSubmit={onHandleRegister}>
                <div className='content_label'>
                    <label className='form_label'>
                        <span className='label_span'>Usuario</span>
                        <input
                            onChange={(user) => setUsername(user)}
                            name='usuario'
                            type='text'
                            className='input_form'
                            required
                        />
                    </label>
                    <label className='form_label'>
                        <span className='label_span'>Email</span>
                        <input
                            onChange={(email) => setEmail(email)}
                            name='email'
                            type='email'
                            className='input_form'
                            required
                        />
                    </label>
                    <label className='form_label'>
                        <span className='label_span'>Contraseña</span>
                        <input
                            onChange={(password) => setPassword(password)}
                            name='password'
                            type='password'
                            className='input_form'
                            required
                        />
                    </label>
                </div>
                <div className='content_btn'>
                    <button type='submit' className='btn register'>
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
