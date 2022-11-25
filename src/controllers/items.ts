import Item from "../db/models/item";
import { Request, Response } from "express";

export const getItems = async (req:Request, res:Response) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error:any) {
        res.status(404).json({ message: error.message });
    }
};