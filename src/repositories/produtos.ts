import { Types } from "mongoose";
import { ProdutosCollection } from "@schemas";

export const getAll = async () => {
    return await ProdutosCollection.find();
};

export const getById = async (id: Types.ObjectId) => {
    return await ProdutosCollection.findOne(id);
};

export const create = async (novoProduto: any) => {
    return await ProdutosCollection.create(novoProduto);
};