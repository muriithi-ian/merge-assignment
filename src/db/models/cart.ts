import mongoose from 'mongoose';
import { ItemType } from '../../types/item';

const Schema = mongoose.Schema;

const CartSchema = new Schema({
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    created_at: Date,
    updated_at: Date
});


const Cart = mongoose.model('Cart', CartSchema);

export default Cart;