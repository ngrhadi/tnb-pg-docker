import { pool } from "../dbconfig/db-connector";
import { getAllTest, postTest, getTestById } from "../queries/testtsQuery";
// import { Client } from "pg";

export const AddTest = async (request: any, response: any) => {
	const client = await pool.connect();
	const { username, email, pin } = request.body;
	try {
		response
			.status(200)
			.send(await client.query(postTest, [username, email, pin]));
	} catch (error) {
		console.log(error);
	} finally {
		client.release();
	}
	response.status(201).send("Test added");
};

export const GetAllTest = async (request: any, response: any) => {
	const client = await pool.connect();
	try {
		const result = await client.query(getAllTest);
		response.status(200).send(result.rows);
	} catch (error) {
		console.log(error);
	} finally {
		client.release();
	}
};

export const GetTestById = async (request: any, response: any) => {
	const client = await pool.connect();
	const { id } = request.params;
	try {
		const result = await client.query(getTestById, [id]);
		response.status(200).send(result.rows);
	} catch (error) {
		console.log(error);
	} finally {
		client.release();
	}
};
