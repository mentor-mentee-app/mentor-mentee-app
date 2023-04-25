import { config } from 'dotenv';
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser'; 

config();

import { login } from './services/login'

function createServer() {
    const app = express();
    app.use(cors());
    app.use(json());

    const port = process.env.PORT;

    app.get('/', (req, res, next) => {
        res.send(`BE root`);
    });

    app.post('/login', async (req, res) => {
        const data = req.body;
        const result = await login(data.email, data.password)
        if (result) {
            res.send({ success: true })
        } else {
            res.send({ success: false })
        }
    })

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}

createServer();
