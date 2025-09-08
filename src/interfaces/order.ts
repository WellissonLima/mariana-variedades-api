export interface Order {
  id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  status: "pendente" | "em_preparo" | "finalizado" | "cancelado";
  createdAt: Date;
  updatedAt: Date;
}
