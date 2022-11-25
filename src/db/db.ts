import mongoose from "mongoose";

const db = async () => {
	return await mongoose.connect("mongodb://localhost:27017/test", {});
};

export default db;
