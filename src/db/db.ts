import mongoose, { ConnectOptions } from "mongoose";
import { mongoURL } from "../index";

const mongoUrl = process.env.MONGO_DB_URL;


const db = async () => {
	return await mongoose.connect(mongoURL,{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions );
};

export default db;
