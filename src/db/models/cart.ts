import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CartSchema = new Schema({
    user_id: ObjectId,
    item_id: ObjectId,
    quantity: Number,
    created_at: Date,
    updated_at: Date
});


const Cart = mongoose.model('Cart', CartSchema);

export default Cart;