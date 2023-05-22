import { config } from 'dotenv';
import express from 'express';
import session from 'express-session';
import cors from 'cors';
import { json } from 'body-parser'; 

config();

import { login } from './services/login'

function createServer() {
    

    const feURL = process.env.FE_URL;

    const app = express();
    app.use(cors({
        origin: `${feURL}`,
        optionsSuccessStatus: 200,
        credentials: true
    }));
    app.use(json());

    app.set('trust proxy', 1) // trust first proxy
    app.use(session({
        secret: 'mans noslēpums',
        resave: false,
        saveUninitialized: true,
    }))

    const port = process.env.PORT;

    app.get('/', (req, res, next) => {
        const loggedIn = req.session['loggedIn']
        const email = req.session['email']
        res.send(`BE root  loggedIn: ${loggedIn}, email: ${email}`)
    });

    app.post('/login', async (req, res) => {
        const data = req.body;
        const result = await login(data.email, data.password);

       

        if (result) {
           
            req.session['loggedIn'] = true;
            req.session['email'] = data.email;
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
