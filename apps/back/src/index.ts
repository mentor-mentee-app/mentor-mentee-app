import { config } from 'dotenv';
import express from 'express';
import { urlencoded } from 'body-parser'; 

config();

import { login } from './services/login'

async function createServer() {
    const app = express();
    app.use(urlencoded())

    const port = process.env.PORT;

    app.get('/', (req, res, next) => {
        res.send(`<form method="POST" action="/login">
          <div>Email: <input type="text" name="email" /></div>
          <div>Password: <input type="password" name="password" /></div>
          <div><input type="submit" value="Submit" /></div>
        </form>`);
    });

    app.post('/login', async (req, res) => {
        const data = req.body;
        console.log(data)
        res.send(data);
        // try {
        //     const result = await login(username, password);
        // } catch(err) {
        //     res.send({ error: err.message })
        // } 
    })

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}

createServer();
