// src/models/Product.ts
import { Schema, model, Document } from "mongoose";
import { Product } from "../interfaces/product";

// Extende Document para integrar com Mongoose
export type ProductDocument = Omit<Product, "id"> & Document;

const productSchema = new Schema<ProductDocument>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
        },
        description: {
            type: String,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stockQuantity: {
            type: Number,
            required: true,
            min: 0,
        },
        category: {
            type: String,
            trim: true,
        },
    },
    {
        timestamps: true, // cria createdAt e updateedAt automaticamente
    }
);

// Cria o model
export const ProductModel = model<ProductDocument>("Product", productSchema);