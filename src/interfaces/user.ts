export interface User {
  id: string;
  name: string;
  email: string;
  password?: string; // pode ser opcional em alguns casos (ex: resposta de API)
  type: "admin" | "fabrica" | "cliente";
  createdAt: Date;
  updatedAt: Date;
}
