import mongoose, { Schema } from "mongoose";

interface IUser {
  _id: string;
  name: string;
}

const userSchema = new Schema<IUser>({
  _id: String,
  name: String,
});

export const User = mongoose.model("User", userSchema);
