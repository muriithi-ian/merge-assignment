import express from 'express';
import { addCart, addItemToCart, getCart, getCarts } from '../controllers/carts';
import { addItem, getItems } from '../controllers/items';
const router = express.Router();

router.get('/getItems', getItems);
router.post('/addItem', addItem);
router.get('/getCarts', getCarts);
router.post('/addCart', addCart);
router.post('/addItemToCart', addItemToCart);
router.get('/getCart/:id', getCart);


export default router;
