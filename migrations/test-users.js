/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
	await knex.schema.createTable("admin", (table) => {
		table.increments("id").primary();
		table.string("adminname").notNullable();
		table.string("email").notNullable();
		table.string("password").notNullable();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
	return await knex.schema.dropTable("admin");
};
