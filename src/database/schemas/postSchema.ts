import mongoose, { Schema } from "mongoose";

interface IPost {
    _id: number;
    title: string;
    content: string;
    author: string;
}

const postSchema = new Schema<IPost>({
    _id: { type: Number, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: [
        { type: Schema.Types.ObjectId, ref: "authorSchema", required: true },
    ],
});

export const Post = mongoose.model<IPost>("Post", postSchema);
