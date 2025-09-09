import { Schema, model, Document } from "mongoose";
import { User } from "../interfaces/user";

type UserDocument = Omit<User, "id"> & Document;

const userSchema = new Schema<UserDocument>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: [3, "O nome deve ter pelo menos 3 caracteres"],
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "E-mail inválido"],
    },
    password: {
      type: String,
      required: true,
      minlength: [6, "A senha deve ter pelo menos 6 caracteres"],
    },
    type: { 
      type: String, 
      enum: ["admin", "fabrica", "cliente"], 
      required: true 
    },
  },
  { timestamps: true }
);

const UserModel = model<UserDocument>("User", userSchema);

export { UserModel };    export type { UserDocument };

