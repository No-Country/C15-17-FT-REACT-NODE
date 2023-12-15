import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { Input } from "../../components/UI/Input";
import { Button } from "../../components/ui/Button";
import { LinkButton } from "../../components/ui/LinkButton";
import { IconEye } from "../../components/icons/IconEye";
import { IconEyeClose } from "../../components/icons/IconEyeClose";

const Login = () => {


    const { singin } = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false)

    const onHandleLogin = async (e) => {
        e.preventDefault();

        if(!email || !password)  {
            alert('deberia llenar los datos')
            return
        }

        const credentials = {
            email,
            password
        }
       await singin(credentials)

    };

    return (
        <div className='content px-6 lg:px-12 bg-radial-blue '>
            <h2 className="font-semibold text-4xl mb-2">PictureFlow</h2>
            <p className=" text-gray-800 font-semibold">Inicia sesion en tu cuenta de PictureFlow</p>
            <form onSubmit={onHandleLogin} className='py-6 bg-radial-yellow'>
                <div className='content_label'>
                    <label className='form_label mb-4 '>
                        <span className='label_span font-semibold text-sm mb-1 text'>Correo</span>
                        <Input 
                            type='email'
                            onChange={(e) => setEmail(e.target.value)}
                            name='email'
                            placeholder='user@gmail.com'
                        />
                    </label>
                    <label className='form_label mb-4'>
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
                </div>
                <div className='content_btn'>
                    <Button type='submit' color='blue' className='w-full'>
                        Iniciar sesión
                    </Button>
                    <div className='content_divisor gap-x-4 w-full justify-center py-2'>
                        <div className='divisor'></div>
                        <span className='font-semibold text-xl'>Ó</span>
                        <div className='divisor'></div>
                    </div>
                    <LinkButton href='/auth/register' color="yellow" className='w-full text-center'>
                        Registrarse
                    </LinkButton>
                </div>
            </form>
        </div>
    );
};

export default Login;