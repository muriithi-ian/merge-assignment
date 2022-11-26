import { Request, Response } from "express";
import Cart from "../db/models/cart";
import Item from "../db/models/item";
import { ItemType } from "../types/item";

export const getCarts = async (req: Request, res: Response) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error: any) {
        res.status(404).json({ message: error.message });
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

export const addItemToCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { items } = req.body;
    if(id) {  
        try {
            const cart = await Cart.findById(id);
            // loop through items and add them to the cart
            items.forEach(async (item: any) => {
                const { itemId, quantity } = item;
                //if item quantity is less than available quantity, add it to the cart
                const availableItemQuant:any = await Item.findById(itemId);
                if (availableItemQuant?.quantity > quantity) {
                    cart?.items.push({ itemId, quantity });
                }

                // if item quantity is more than available quantity, add only available quantity to the cart
                else if (availableItemQuant?.quantity <= quantity) {
                    cart?.items.push({ itemId, quantity: availableItemQuant?.quantity });
                }

                // update item quantity
                const updatedItem = await Item.findByIdAndUpdate(itemId, { quantity: availableItemQuant?.quantity - quantity }, { new: true });


            });
            
            
            res.status(200).json(cart);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }else{
        try {
            const cart = await Cart.create({ items });
            res.status(200).json(cart);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    }
}

export const removeItemFromCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    const { itemId } = req.body;
    try {
        const cart = await Cart
            .findById(id)

        // remove item from cart
        const newCart = cart?.items.filter((item: any) => item.itemId != itemId);
        
        //update cart
        const updatedCart = await Cart.findByIdAndUpdate(id, { items: newCart}, { new: true });
    }catch (error: any) {
        res.status(400).json({ message: error.message });
    }
}