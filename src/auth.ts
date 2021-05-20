import express from 'express';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import { users, Role } from './users'
import config from './config.json';
import middleware from './middleware';

const accessTokenSecret = config.accessToken;

const app = express();
app.use(bodyParser.json());
app.post('/login', (req: express.Request, res: express.Response) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        const accessToken = jwt.sign({ username: user.username, role: user.role },accessTokenSecret);
        res.json({ accessToken });
    }
    else {
        res.sendStatus(401);
    }
});

app.get('/admin', middleware, (req: express.Request, res: express.Response) => {
    const { role } = (req as any).user;
    if (role !== 'admin') {
        return res.sendStatus(403);
    }
    return res.send('Hello, admin');
});

app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});