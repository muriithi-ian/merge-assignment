import express from "express";
import db from "./db/db";
import router from "./routes";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import Item from "./db/models/item";
import { itemsList } from "./db/seed";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;
export const mongoURL = process.env.MONGO_DB_URL || "";

db()
	.then(async (res: any) => {
		console.log("Connected to database");

		const seedItems = await Item.count();
		console.log(seedItems);
		if (seedItems < 10) {
			await Item.insertMany(itemsList);
		}
	})
	.catch((err: any) => {
		console.log("Error connecting to database", err);
	});
app.use(morgan("dev")); // logging
app.use(express.json());
app.use("/api", router);
app.get("/", (req, res) => {
	res.send(
		"Welcome to your cart API.<br />Please login/create an account to continue."
	);
});

app.use((req: Request, res: Response) => {
	res.status(404).send("Not found");
});

app.listen(port, () => {
	console.log("Server is running on port 3000");
});
