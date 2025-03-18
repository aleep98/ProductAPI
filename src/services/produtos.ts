import { Types } from "mongoose";
import { ProdutosRepository } from "@repository";

export const getAll = async () => {
    return await ProdutosRepository.getAll();
};

export const getById = async (id: Types.ObjectId) => {
    return await ProdutosRepository.getById(id);
};

export const create = async (novoProduto: any) => {
    return await ProdutosRepository.create(novoProduto);
};