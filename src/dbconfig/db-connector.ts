import { Pool, Client } from "pg";
// pools will use environment variables
// for connection information
// require("dotenv").config();

export const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "data2",
	password: "password",
	port: 5432,
});

export const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "data2",
	password: "password",
	port: 5432,
});
client.connect();
