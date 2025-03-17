import produtosRepository from "../repositories/produtosRepository";

const produtosService = {
    getAllProdutos: async() =>{
        return await produtosRepository.getAllPordutos();
    },

    getProdutosById: async(id: number) => {
        return await produtosRepository.getProdutosById(id);
    }
};

export default produtosService;