import Item from "../db/models/item";
import { Request, Response } from "express";
import mongoose from "mongoose";

export const getItems = async (req: Request, res: Response) => {
	try {
		const items = await Item.find();
		res.status(200).json(items);
	} catch (error: any) {
		res.status(404).json({ message: error.message });
	}
};

export const addItem = async (req: Request, res: Response) => {
	const item = req.body;
	const newItem = new Item(item);
	try {
		await newItem.save();
		res.status(201).json(newItem);
	} catch (error: any) {
		res.status(409).json({ message: error.message });
	}
};
