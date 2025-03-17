const { produtos } = require("../models/produtos");


const produtosRepository = {
    getAllPordutos: async () => {
        return await produtos.findAll(); 
    },

    getProdutosById: async (id: number) => {
        return await produtos.findByPk(id);
    }
}



export default produtosRepository;

