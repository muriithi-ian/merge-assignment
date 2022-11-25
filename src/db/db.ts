import mongoose from "mongoose";

const db = async () => {
	return await mongoose.connect("mongodb://localhost:27017/cart", {});
};

export default db;
