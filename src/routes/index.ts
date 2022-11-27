import express from "express";
import { addItemToCart, getCart, getCarts, removeItemFromCart } from "../controllers/carts";
import { addItem, getItems } from "../controllers/items";
const router = express.Router();

router.get("/getItems", getItems);
router.post("/addItem", addItem);
router.get("/getCarts", getCarts);
router.get("/getCart/:id", getCart);
router.post("/addItemsToCart/:id", addItemToCart);
router.post("/addItemsToCart", addItemToCart);
router.post("/removeItemFromCart/:id", removeItemFromCart);

export default router;
