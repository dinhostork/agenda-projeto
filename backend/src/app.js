import express from 'express';
import 'dotenv/config';
import path from 'path';
import routes from './routes';
import './database';
const cors = require('cors')

class App {
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(cors())
        this.server.use(express.json());
        this.server.use(
            '/uploads',
            express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        );
    }

    routes() {
        this.server.use(routes);
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            return res.status(500).json({ error: 'Internal Server Error' });
        });
    }
}

export default new App().server;
