import { Request, Response } from "express";
import produtosService from "../Services/produtosService.js";

export class produtosController {
   
    getAllProdutos: async (req: Request, res: Response) => {
        try{
            const produtos = await produtosService.getAllProdutos();
            return res.status(200).json(produtos);
        } catch (error) {
            res.status(500).json({error: "Ocorreu um erro ao buscar os produtos"});
        }
    },

    getProdutosById: async  (req: Request, res: Response) => {
        try{
            const {id} = req.params;
            const produto = await produtosService.getProdutosById(parseInt(id));
            if(produto){
                res.status(200).json(produto)
            } else {
                res.status(404).json({error: "Produto nao encontrado"});
            }
        } catch (error) {
            res.status(500).json({error: "Ocorreu um erro ao buscar o produto"});
        }
    }
};

export default produtosController;