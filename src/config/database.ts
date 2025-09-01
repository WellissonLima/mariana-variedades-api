import mongoose from "mongoose";
import dotenv from "dotenv";
import { error } from "console";

dotenv.config();


export const connectDatabase = async (): Promise<void> => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error("❌ Variável de ambiente MONGO_URI não definida!");
        }

        await mongoose.connect(mongoUri);
        console.log("✅ Conectado ao MongoDB (ecom_db) com sucesso!");
    } catch (error) {
        console.error("❌ Erro ao conectar ao MongoDB:", error);
        process.exit(1);
    }
};