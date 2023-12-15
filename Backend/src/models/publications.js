import mongoose from "mongoose";

const publicationSchema = mongoose.Schema({
    image: {
        type: String, // Puedes cambiar el tipo según tus necesidades (String, Buffer, etc.)
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    team: {
        type: String,
        required: true,
    },
    tags: {
        type: [String], // Puedes ajustar según cómo quieras manejar las etiquetas
        required: true,
    },
    photographer: {
        type: mongoose.Schema.Types.ObjectId, // Referencia al ID de un usuario (asumiendo que el usuario es almacenado en otra colección)
        ref: "User", // Nombre del modelo de usuario en caso de que esté almacenado en otra colección
        default: null,
    },
    time: {
        type: Date,
        default: Date.now,
    },
});

/* 
image,
title,
description,
team,
tags,
photographer: photographer || null, //userPhoto._id
time: new Date(),
 */

const publications = mongoose.model("Publication", publicationSchema);

export default publications;
