import express from "express";
import produtosController from "../controllers/produtosController.ts"; // ✅ Corrigido
const router = express.Router();

router.get("´produtos/", produtosController.getAllProdutos);
router.get("´produtos/:id", produtosController.getProdutosById);
router.post("produtos/", produtosController.createProdutos);
router.put("produtos/:id", produtosController.updateProdutos);
router.delete("produtos/:id", produtosController.deleteProdutos);

export default router;
