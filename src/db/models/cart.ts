import mongoose from "mongoose";
import { ItemType } from "../../types/item";

const Schema = mongoose.Schema;

const CartSchema = new Schema(
	{
		items: [
			{
				itemId: { type: Schema.Types.ObjectId, ref: "Item" },
				quantity: Number,
			},
		],
	},
	{ timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
