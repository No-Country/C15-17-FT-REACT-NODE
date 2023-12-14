import mongoose from "mongoose";
import User from "../models/users.js";

export const getUsers = async (req, res) => {
    try {
        // Obtén todos los usuarios de la base de datos
        const users = await User.find();

        // Devuelve la lista de usuarios en la respuesta
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error interno del servidor");
    }
}

export const getUser = async (req, res) => {

    const { id } = req.params

    try {

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("ID de usuario no válido");
        }

        const user = await User.findById(id).select('-password')

        if (!user) {
            return res.status(404).send("Usuario no encontrado");
        }

        return res.status(200).json(user);

    } catch (error) {
        console.error(error);
        return res.status(500).send("Error interno del servidor");
    }
};