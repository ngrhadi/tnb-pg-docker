import { pool } from "../dbconfig/db-connector";
import { Client } from "pg";

export const AddTest = async (test: any) => {
	const client = await pool.connect();
	try {
		await client.query("BEGIN");
		await client.query("INSERT INTO test(name, age) VALUES($1, $2)", [
			test.name,
			test.age,
		]);
		await client.query("COMMIT");
	} catch (err) {
		await client.query("ROLLBACK");
		throw err;
	} finally {
		client.release();
	}
};
