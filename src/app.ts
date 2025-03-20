import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import { router } from './routes/index';
import dotenv from "dotenv"; 

dotenv.config({ path: "./.env" });

export class App {
    public server: express.Application;
    public httpServer: http.Server | null = null;

    constructor() {
        this.server = express();
        this.connectToDatabase();
        this.router();
    }

    private connectToDatabase = async () => {
        console.log("MONGO_URI:", process.env.MONGO_URI);

        if (!process.env.MONGO_URI) {
            throw new Error("Erro: MONGO_URI não está definida no .env!");
        }

        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log('Conectado ao MongoDB');
        return connect;
    };

    private router() {
        this.server.use('/api/v1', router);
    }
}
