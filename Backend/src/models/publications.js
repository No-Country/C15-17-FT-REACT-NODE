import mongoose from "mongoose";

const publicationSchema = mongoose.Schema(
    {
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        url: {
            type: String, 
        },
        likes: [
            {
              type: mongoose.Types.ObjectId,
              ref: "users",
            },
        ],
        downloads: {
            type: Number,
        },
        photographer: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        }
    }
);

const publications = mongoose.model("Publication", publicationSchema );

export default publications;