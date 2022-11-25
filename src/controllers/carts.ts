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