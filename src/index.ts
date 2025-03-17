import express from 'express'
import productRoutes from './routes/productRoutes';

const app = express();

app.use(express.json())

app.use('/produtos', productRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});