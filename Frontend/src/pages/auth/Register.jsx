
import { useState } from "react";
import { IconEye } from "../../components/icons/IconEye";
import { IconEyeClose } from "../../components/icons/IconEyeClose";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/UI/Input";
import { LinkButton } from "../../components/ui/LinkButton";
import { useAuth } from "../../hooks/useAuth";

const Register = () => {


    const { signup } = useAuth()
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false)




    const onHandleRegister = async (e) => {
        e.preventDefault();
        
        if(!username || !email || !password) {
            alert('Deberia llenar los campos')
            return
        }

        if(password !== repeatPassword) {
            alert('Las contraseñas deben ser identicas')
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
        <div className='content px-6 lg:px-12 bg-radial-blue '>
        <h2 className="font-semibold text-4xl mb-2">PictureFlow</h2>
        <p className=" text-gray-800 font-semibold">Inicia sesion en tu cuenta de PictureFlow</p>
        <form onSubmit={onHandleRegister} className='py-6 bg-radial-yellow'>
            <div className='content_label'>
                <label className='form_label mb-4 '>
                    <span className='label_span font-semibold text-sm mb-1 text'>Usuario</span>
                    <Input 
                        type='text'
                        onChange={(e) => setUsername(e.target.value)}
                        name='username'
                        placeholder='@username'
                    />
                </label>

                <label className='form_label mb-4 '>
                    <span className='label_span font-semibold text-sm mb-1 text'>Correo</span>
                    <Input 
                        type='email'
                        onChange={(e) => setEmail(e.target.value)}
                        name='email'
                        placeholder='user@gmail.com'
                    />
                </label>
                
                <div className="flex items-center gap-x-6 w-full mb-4">
                    <label className='form_label mb-4 w-full'>
                        <span className='label_span font-semibold text-sm mb-1'>Contraseña</span>
                        <div className="relative">
                            <Input
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setPassword(e.target.value)}
                                className='pr-12'
                                placeholder='**********'
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-4">
                                {   
                                    showPassword ? <IconEyeClose /> : <IconEye />
                                }
                            </button>
                        </div>
                    </label>
                    <label className='form_label mb-4 w-full'>
                        <span className='label_span font-semibold text-sm mb-1'>Repetir contraseña</span>
                        <div className="relative">
                            <Input
                                name='password'
                                type={showPassword ? 'text' : 'password'}
                                onChange={(e) => setRepeatPassword(e.target.value)}
                                className='pr-12'
                                placeholder='**********'
                            />
                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 -translate-y-1/2 right-4">
                                {   
                                    showPassword ? <IconEyeClose /> : <IconEye />
                                }
                            </button>
                        </div>
                    </label>
                </div>
            </div>
            <div className='content_btn'>
                <Button type='submit' color='blue' className='w-full'>
                    Registrarse
                </Button>
                <div className='content_divisor gap-x-4 w-full justify-center py-2'>
                    <div className='divisor'></div>
                    <span className='font-semibold text-xl'>Ó</span>
                    <div className='divisor'></div>
                </div>
                <LinkButton href='/auth/login' color="yellow" className='w-full text-center'>
                    Iniciar Sesión
                </LinkButton>
            </div>
        </form>
    </div>
    );
};

export default Register;
