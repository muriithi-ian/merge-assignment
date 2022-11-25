import { Request, Response } from "express";
import Cart from "../db/models/cart";

export const getCarts = async (req: Request, res: Response) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

export const addCart = async (req: Request, res: Response) => {
    const cart = req.body;
    const newCart = new Cart(cart);
    try {
        await newCart.save();
        res.status(201).json(newCart);
    } catch (error: any) {
        res.status(409).json({ message: error.message });
    }
}

export const getCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const cart = await Cart.findById(id);
        res.status(200).json(cart);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}

const addItemToCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { itemIds } = req.body;
    try {
        const cart = await Cart.findById(id);
        cart.items.push(...itemIds);
        await cart.save();
        
        res.status(200).json(cart);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}