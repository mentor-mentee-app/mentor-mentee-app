import { config } from 'dotenv';
import express from 'express';

config();

async function createServer() {
    const app = express();
    const port = process.env.PORT;

    app.get('/', (req, res) => {
        res.send('Hello world from back end');
    });

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}

createServer();
