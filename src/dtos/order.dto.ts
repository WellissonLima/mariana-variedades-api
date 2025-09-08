export interface CreateOrderDTO {
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
}

export interface UpdateOrderStatusDTO {
  status: "pendente" | "em_preparo" | "finalizado" | "cancelado";
}
