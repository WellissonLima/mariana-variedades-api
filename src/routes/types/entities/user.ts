export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    type: "admin" | "fabrica" | "cliente";
    createdAt: Date;
    updatedAt: Date;
}