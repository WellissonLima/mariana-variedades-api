// DTO para criar produto
export interface CreateProductDTO {
  name: string;
  description?: string;
  price: number;
  stockQuantity: number;
  category?: string;
}

// DTO para atualizar produto
export interface UpdateProductDTO {
  name?: string;
  description?: string;
  price?: number;
  stockQuantity?: number;
  category?: string;
}
