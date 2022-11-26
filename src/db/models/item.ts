import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
}, { timestamps: true });

const Item = mongoose.model('Item', ItemSchema);

export default Item;