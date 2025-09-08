export interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  type: "admin" | "fabrica" | "cliente";
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  password?: string;
  type?: "admin" | "fabrica" | "cliente";
}

export interface LoginDTO {
  email: string;
  password: string;
}
