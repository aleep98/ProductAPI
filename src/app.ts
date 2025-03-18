import express from 'express'
import http from 'http';
import mongoose from 'mongoose';
import { router } from './routes/index'

export class App {
    public server: express.Application;
    public httpServer: http.Server | null = null;

    constructor() {
        this.server = express();
        this.connectToDatabase();
        this.router();
    }

    private connectToDatabase = async () => {
        const connect = await mongoose.connect(process.env.MONGO_URL!);
        console.log('conected')
        return connect
    };

    private router() {
        this.server.use('/api/v1', router);
    }

}