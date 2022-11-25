import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ItemSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    created_at: Date,
    updated_at: Date
});

const Item = mongoose.model('Item', ItemSchema);

export default Item;