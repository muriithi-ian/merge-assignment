import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    created_at: Date,
    updated_at: Date
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;