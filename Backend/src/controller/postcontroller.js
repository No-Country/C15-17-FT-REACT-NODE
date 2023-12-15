import  publications  from "../models/publications.js";


export const allPublications = async (req, res) => {
    try {
        const photo = await publications.find().populate("photographer", {
            _id: 1,
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

export const newPublication = async (req, res) => {
    try {
        const { image, title, description, team, tags,  } = req.body;

        // const userPhoto = await users.findById(photographer);

        const photo = await publications({
            image,
            title,
            description,
            team,
            tags,
            // photographer: photographer || null, //userPhoto._id
            time: new Date(),
        });

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


export const deletePublication = async (req, res) => {
    try {
        if (await publications.findOne({_id: req.params.id })) {
            await publications.deleteOne({ _id: req.params.id });

            return res.status(201).json({ message: "Publicacion eliminada correctamente"})
        }
        return res.status(404).json({message: "La publicacion que desea eliminar no existe"});
    } catch (error) {
        res.status(404).json({message: error});
    }
};