import mongoose, { Schema } from "mongoose";

interface IAuthor {
    _id: number;
    authorFirstName: string;
    authorLastName: string;
    authorAge: number;
}

const authorSchema = new Schema({
    _id: Number,
    authorFirstName: String,
    authorLastName: String,
    authorAge: Number,
});

export const Author = mongoose.model<IAuthor>("Author", authorSchema);
