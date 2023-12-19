
import { useState } from "react";
import { toast } from "react-toastify";
import { IconEye } from "../../components/icons/IconEye";
import { IconEyeClose } from "../../components/icons/IconEyeClose";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/UI/Input";
import { LinkButton } from "../../components/ui/LinkButton";
import { useAuth } from "../../hooks/useAuth";
import { registerValidate } from "../../utils/auth.validate";

const Register = () => {


    const { signup } = useAuth()

    const [data, setData] = useState({
        username : '',
        email : '',
        password : '',
        repeatPassword : ''
    })

    const [error, setError] = useState({
        username : false,
        email : false,
        password : false,
        repeatPassword : false
    })

    const [isLoad, setIsLoad] = useState(false)


    const [showPassword, setShowPassword] = useState(false)



    const handleFocus = () => {
        setError({
           email : false,
           password : false
        })

    }


    const handleChange = (e) => {
        setData((prevValues) => ({
            ...prevValues,
            [e.target.name] : e.target.value
        }))
    }


    const onHandleRegister = async (e) => {
        e.preventDefault();
        setIsLoad(true)
        const { field, isError, messages } = registerValidate(data)

        if(isError)  {
            messages.forEach(message => {
                toast.error(message)
            })
            setError(prevState => ({...prevState, ...field}))
            setIsLoad(false)

            return
        }


        const credentials = {
            username: data.username,
            email: data.email,
            password: data.password,
        };

        const response = await signup(credentials)

        if (response?.error) {
            toast.error(response.error)
            setError((prevValues) => ({
                ...prevValues,
                email : true
            }))
        }

        setIsLoad(false)

        
       
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
                        onChange={handleChange}
                        onFocus={handleFocus}
                        name='username'
                        className={error.username ? ' border-red-400' : 'border-border-box'}
                        placeholder='@username'
                    />
                </label>

                <label className='form_label mb-4 '>
                    <span className='label_span font-semibold text-sm mb-1 text'>Correo</span>
                    <Input 
                        type='email'
                        onChange={handleChange}
                        onFocus={handleFocus}
                        name='email'
                        className={error.email ? ' border-red-400' : 'border-border-box'}
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
                                onChange={handleChange}
                                onFocus={handleFocus}
                                className={`pr-12 ${error.password ? ' border-red-400' : 'border-border-box'}`}
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
                                name='repeatPassword'
                                type={showPassword ? 'text' : 'password'}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                className={`pr-12 ${error.repeatPassword ? ' border-red-400' : 'border-border-box'}`}
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
                <Button isLoading={isLoad} type='submit' color='blue' className='w-full'>
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
