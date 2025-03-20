import mongoose, { Schema } from "mongoose";

export const ProdutoSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    descricao: String,
    valor: Number,
    medidas: {
        peso: Number,
        comprimento: Number,
        espessura: Number,
    }
})

export default mongoose.model('Produtos', ProdutoSchema);