import { Product } from "../entities/product";

// Entrada para criar produto
export type CreateProductDTO = {
  name: string;
  description?: string;
  price: number;
  stockQuantity: number;
  category?: string;
};

// Entrada para atualizar (PATCH)
// Limitamos só aos campos realmente atualizáveis pelo cliente
export type UpdateProductDTO = Partial<
  Pick<Product, "name" | "description" | "price" | "stockQuantity" | "category">
>;

// Saída pública para o cliente (explícita = contratos mais estáveis)
export type PublicProduct = {
  id: string;
  name: string;
  description?: string;
  price: number;
  stockQuantity: number;
  category?: string;
  createdAt: Date;
  updatedAt: Date;
};
