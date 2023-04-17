import { config } from 'dotenv';
import express from 'express';
import { urlencoded } from 'body-parser';

config();



    function createServer() {
    const app = express();
    app.use(urlencoded())

    const port = process.env.PORT;

    app.get('/',(req, res, next) => {
        res.send(`<form method="POST" action="/login">
        <div style="font-family: verdana; font-size: 25px; margin-botton: 15px; color: blue;">Email: <input type="text" name="email" /></div>
        <div style="font-family: verdana; font-size: 25px; margin-botton: 15px;">Password: <input type="password" name="password"/> </div>
        <div><input type="submit" value="Submit"  style="font-size: 25px;"/></div>
        </form>`);
    });



    app.post('/login', (req, res) => {
        const data = req.body;
        console.log(data)
        
        res.send(data);
    });

    app.listen(port, () => {
        console.log(`[server]: Server is running at http://localhost:${port}`);
    });
}

createServer();
