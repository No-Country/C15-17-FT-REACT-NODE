import mongoose from "mongoose";
import { uploadImage } from "../libs/cloudinary.js";
import User from "../models/users.js";
import fs from "fs-extra";

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();

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


export const updateUser = async (req, res) => {
    const { id } = req.params;

    let avatar = null

    if(req.files?.avatar) {
        const result = await uploadImage(req.files.avatar.tempFilePath, 'avatars');
        await fs.remove(req.files.avatar.tempFilePath);
        avatar = result.secure_url
    }

    try {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send("ID de usuario no válido");
        }

        const propertiesToUpdate = ['username', 'name', 'lastName', 'description'];

        // Verificamos si las propiedades tienen algun contenido
        const toUpdate = {};
        propertiesToUpdate.forEach(prop => {
           

            if (req.body[prop]) {
                toUpdate[prop] = req.body[prop];
            }
        });

        if (avatar) toUpdate.avatar = avatar;
        


        const updatedUser = await User.findByIdAndUpdate(
            id,
            toUpdate,
            { new: true } // Devuelve el documento actualizado
        );
        

        if (!updatedUser) {
            return res.status(404).send("Usuario no encontrado");
        }

        return res.status(200).json(updatedUser);
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error interno del servidor");
    }
};