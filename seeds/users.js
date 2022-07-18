/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	// await knex("user").del();
	await knex("admin").insert([
		{ id: 1, adminname: "test", email: "test1@gmail.com", password: "test" },
	]);
};
