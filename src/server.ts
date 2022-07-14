import express, { Router } from "express";
import cors from "cors";
import { pool } from "./dbconfig/db-connector";
import bodyParser from "body-parser";

const app: express.Application = express();
const router: Router = express.Router();
const port: number = 5050;
const host: string = "localhost";
const corsOptions = {
	origin: "*",
	methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
	preflightContinue: false,
	optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

const server = app
	.listen(port, host, () => {
		console.log(`Server is running on port ${port}`);
	})
	.on("error", (err: Error) => {
		console.log(err);
	})
	.on("close", () => {
		console.log("Server is closed");
	})
	.on("listening", () => {
		console.log("Server is listening");
	})
	.on("connection", () => {
		console.log("Server is connected");
	})
	.on("disconnect", () => {
		console.log("Server is disconnected");
	})
	.on("timeout", () => {
		console.log("Server is timeout");
	})
	.on("request", () => {
		console.log("Server is request");
	})
	.on("upgrade", () => {
		console.log("Server is upgrade");
	})
	.on("end", () => {
		console.log("Server is end");
	})
	.on("close", () => {
		console.log("Server is close");
	});

export default server;
