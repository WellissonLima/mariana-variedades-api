import { User } from "../entities/user";

// Entrada para criar usuário (cadastro)
export type CreateUserDTO = {
  name: string;
  email: string;
  password: string;
  type: "admin" | "fabrica" | "cliente";
};

// Atualização de dados do usuário (sem password aqui)
export type UpdateUserDTO = Partial<
  Pick<User, "name" | "email" | "type">
>;

// Fluxo específico de troca de senha (separado do UpdateUsuarioDTO)
export type UpdatePasswordDTO = {
  currentPassword: string;
  newPassword: string;
};

// Saída pública (nunca inclui password)
export type PublicUser = Omit<User, "password">;

// Autenticação
export type LoginRequestDTO = {
  email: string;
  password: string;
};

export type LoginResponseDTO = {
  user: PublicUser;
  token: string;        // JWT
  refreshToken?: string;
};
