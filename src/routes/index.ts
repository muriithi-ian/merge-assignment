import express from 'express';
import { addItem, getItems } from '../controllers/items';
const router = express.Router();

router.get('/getItems', getItems);
router.post('/addItem', addItem);
