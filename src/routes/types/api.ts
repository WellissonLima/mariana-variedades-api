import { Request, Response } from "express";

// Tipos genericos para respostas da API
export interface ApiResponse<T> {
    success: boolean;
    data?: T;
    message?: string;
}

// Helpers para tipar Request/Response nas rotas
export type ReqBody<T> = Request<unknown, unknown, T>;
export type ReqParams<T> = Request<T>;
export type ReqQuery<T> = Request<unknown, unknown, unknown, T>;
export type Res<T> = Response<ApiResponse<T>>;

// Exemplo de requisições
// export interface CriarProdutoRequest {
//     name: string;
//     descriptin?: string;
//     price: number;
//     stockQuantity: number;
//     category?: string;
// }

// export interface AtualizarProdutoRequest {
//     id: string;
//     name: string;
//     description?: string;
//     price: number;
//     stockQuantity?: number;
//     category?: string;
// }