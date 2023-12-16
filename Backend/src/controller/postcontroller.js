import mongoose from "mongoose";
import { uploadImage } from "../libs/cloudinary.js";
import  publications  from "../models/publications.js";
import fs from "fs-extra";


export const allPublications = async (req, res) => {
    try {
        const photo = await publications.find().populate("photographer", {
            _id: 1,
            username: 1,
            name: 1,
            lastName: 1,
            avatar: 1
        });
        if (photo.length === 0) {
            return res.status(201).send({ message: "No hay publicaciones creadas"});
        }
        return res.status(201).json(photo);
    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: error })
    }
};

export const deletePublication = async (req, res) => {
    const { id } = req.params
    try {
        if (!mongoose.Types.ObjectId.isValid(team)) {
            return res.status(400).json({error : "ID de la publicacion no válido"});
        }
          const deletedPublication = await publications.findOneAndDelete({ _id: id });

          // Verificar si la publicación existe
          if (!deletedPublication) {
              return res.status(404).json({ error: "Publicación no encontrada" });
          }
          
          if(deletedPublication?.image?.public_id) {
            await deleteImage(deletedPublication.image.public_id)
          }
          
  
          return res.status(200).json({ message: "Publicación eliminada exitosamente", deletedPublication });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error })
    }
}

export const getPublicationsByTeam = async (req, res) => {
    const { team } = req.params
    try {

        if (!mongoose.Types.ObjectId.isValid(team)) {
            return res.status(400).json({error : "ID de la publicacion no válido"});
        }

        const publicationsByTeam = await publications.find({ 'team': team })
        .populate("photographer", {
            _id: 1,
            name: 1,
            lastName: 1,
            avatar: 1
        });

        if (publicationsByTeam.length === 0) {
            return res.status(404).json({ error: "No hay publicaciones para este equipo" });
        }

        return res.status(200).json(publicationsByTeam);

    } catch (error) {
        return res.status(500).send({ error })
    }

}

export const newPublication = async (req, res) => {
    try {
    
        const { title, description, team, tags, photographer } = req.body;
        let image = null

        if(req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            image = {
                url : result.secure_url,
                public_id : result.public_id
            }
        }

        // const userPhoto = await users.findById(photographer);
        const newPin = {
            title,
            description,
            team,
            tags,
            image,
            time: new Date(),
            photographer
        }

        const photo = await publications(newPin);

        await photo.save();
        console.log(photo);
        //userPhoto.publications = userPhoto.publications.concat(photo._id);
        //await userPhoto.save();
        return res.status(201).send({ message: "Publicacion creada correctamente" });


    } catch (error) {
        console.log(error);
        return res.status(400).send({ message: error })        
    }
};


