import { Request, Response } from "express";
import mongoose from "mongoose";
import { ProdutosServices } from "@services";
import { IdUtils } from "@utils";

export const getAll = async (req: Request, res: Response) => {
    try {
        const produtos = await ProdutosServices.getAll();
        res.status(200).json(produtos);
    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro ao buscar os produtos" });
    }
};

export const getById = async (req: Request, res: Response) => {
    try {
        const id  = req.params.id;
        const produto = await ProdutosServices.getById(IdUtils.toObjectId(id));
        if (produto) {
            res.status(200).json(produto)
        } else {
            res.status(404).json({ error: "Produto nao encontrado" });
        }
    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro ao buscar o produto" });
    }
}

export const create = async (req: Request, res: Response) => {
    try {
        let produto = req.body
        
        produto = {
            _id: new mongoose.Types.ObjectId(),
            ...produto
        }

        const novoProduto = await ProdutosServices.create(produto);

        res.status(200).json(novoProduto)
    } catch (error) {
        res.status(500).json({ error: "Ocorreu um erro ao buscar o produto" });
    }
}