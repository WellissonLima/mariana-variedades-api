import { Types } from "mongoose";

export interface Order {
  id: string;
  userId: Types.ObjectId;
  products: {
    productId: Types.ObjectId;
    quantity: number;
  }[];
  status: "pendente" | "em_preparo" | "finalizado" | "cancelado";
  createdAt: Date;
  updatedAt: Date;
}
