import express from 'express';
import db from './db/db';
import router from './routes';
import morgan from 'morgan';
import * as dotenv from "dotenv";
dotenv.config();


const app = express();

const port = process.env.PORT || 5000;
export const mongoURL = process.env.MONGO_DB_URL ||'';

db().then((res:any) => {
    console.log('Connected to database');
}).catch((err:any) => {
    console.log('Error connecting to database', err);
});
app.use(morgan('dev')); // logging
app.use(express.json());
app.use(router)
app.get('/', (req, res) => {
    res.send('Welcome to your cart API.<br />Please login/create an account to continue.');
});


app.listen(port, () => {
    console.log('Server is running on port 3000');
});