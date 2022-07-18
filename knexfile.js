// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
	client: "postgresql",
	connection: {
		database: "postgres",
		user: "postgres",
		password: "password",
		host: "localhost",
		port: 4321,
	},
};
