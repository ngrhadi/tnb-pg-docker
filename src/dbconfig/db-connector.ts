import { Pool, Client } from "pg";
import knex from "knex";

export const db = knex({
	client: "pg",
	connection: {
		host: "localhost",
		user: "postgres",
		password: "password",
		port: 4321,
		database: "test",
	},
});
// pools will use environment variables
// for connection information
// require("dotenv").config();

const types = require("pg").types;
types.setTypeParser(1700, "text", parseFloat);

// local postges
export const pool = new Pool({
	user: "postgres",
	host: "localhost",
	database: "postgres",
	password: "password",
	port: 4321,
});

export const client = new Client({
	user: "postgres",
	host: "localhost",
	database: "postgres",
	password: "password",
	port: 4321,
});
client.connect();
