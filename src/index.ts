import express from 'express';
import db from './db/db';

const app = express();

db().then((res:any) => {
    console.log('Connected to database');
}).catch((err:any) => {
    console.log('Error connecting to database', err);
});
app.get('/', (req, res) => {
    res.send('Welcome to your cart API.<br />Please login/create an account to continue.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});