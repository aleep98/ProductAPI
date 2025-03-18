import { ProdutosController } from "../controllers";
import express from "express";

const router = express.Router();

router.get('/', ProdutosController.getAll);
router.get('/:id', ProdutosController.getById);
router.post('/', ProdutosController.create);
// router.put("produtos/:id", produtosController.updateProdutos);
// router.delete("produtos/:id", produtosController.deleteProdutos);

export default router;
