import { Order } from "../entities/order";

// Entrada para criar pedido
export type CreateOrderDTO = {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
};

// Atualização do status do pedido
export type UpdateOrderDTO = Partial<Pick<Order, "status">>;

// Saída pública enriquecida (sem expor apenas IDs “crus”)
export type PublicOrder = Omit<Order, "userId" | "products"> & {
  user: {
    id: string;
    name: string;
    email: string;
  };
  products: {
    id: string;
    name: string;
    quantity: number;
  }[];
};
