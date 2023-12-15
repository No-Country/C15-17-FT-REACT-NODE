import User from "../models/users.js";
import bcrypt from 'bcrypt';
import { generateToken } from "../middlewares/auth.middleware.js";

/* registro */

export const signUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body)

        if (!(await User.findOne({name: name}))) {
            const passwordHash = await bcrypt.hash(password, 10)

            

            const newUser = new User ({
                name,
                email,
                password: passwordHash,
            });
            
            await newUser.save();
            const acess_token = generateToken(newUser)
            return res.status(200).json({acess_token, newUser, creado: "true"});
        }
        return res.status(404).send({msg: "Email ya asociado"})

    } catch (error) {
        console.log(error)
    }
};

/* login */
export const signIn = async (req, res) => {
    const { email, password } = req.body;
    if (!email) {
        return res.status(400).send({ error: "user vacío" });
    } else if (!password) {
        return res.status(400).send({ error: "Contraseña vacía" });
    }

    try {
        const user = await User.findOne({ email });
        
        if (!user) return res.status(404).send("Usuario no encontrado, revisa el correo o regístrate");

        const matchPassword = await bcrypt.compare(password, user.password);
        
        if(!matchPassword) return res.status(404).send("Las contraseñas no coinciden")

        const acess_token = generateToken(user)

        return res.status(200).json({acess_token, user: user, logged: "true" });
        
    } catch (error) {
        console.log(error);
        return res.status(500).send("Error interno del servidor");
    }
};