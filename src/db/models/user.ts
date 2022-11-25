import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    created_at: Date,
    updated_at: Date
});

const User = mongoose.model('User', UserSchema);

export default User;