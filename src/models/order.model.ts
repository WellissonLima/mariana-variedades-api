import { Schema, model, Document } from "mongoose";
import { Order } from "../interfaces/order";

type OrderDocument = Omit<Order, "id"> & Document;

const orderSchema = new Schema<OrderDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    products: {
      type: [
        new Schema(
          {
            product: { type: Schema.Types.ObjectId, ref: "Product", required: true },
            quantity: { type: Number, required: true, min: 1 },
          },
          { _id: false }
        )
      ],
      validate: [(val: any[]) => val.length > 0, "Pedido deve conter pelo menos um produto"],
    },
    status: {
      type: String,
      enum: ["pendente", "em_preparo", "finalizado", "cancelado"],
      default: "pendente",
    },
  },
  { timestamps: true }
);

const OrderModel = model<OrderDocument>("Order", orderSchema);

export { OrderModel };    export type { OrderDocument };

