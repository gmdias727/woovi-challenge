import mongoose, { Schema } from "mongoose";

interface IAuthor {
    _id: number;
    authorFirstName: string;
    authorLastName: string;
    authorAge: number;
}

const authorSchema = new Schema<IAuthor>({
    _id: { type: Number, required: true },
    authorFirstName: { type: String, required: true },
    authorLastName: { type: String, required: true },
    authorAge: { type: Number, required: false },
});

export const Author = mongoose.model<IAuthor>("Author", authorSchema);
