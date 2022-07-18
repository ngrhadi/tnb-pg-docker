import { db } from "./db-connector";

(async () => {
	try {
		await db.schema.dropTableIfExists("user");
		await db.schema.withSchema("public").createTable("user", (table) => {
			table.increments();
			table.string("username");
			table.string("email");
			table.string("password");
		});
		console.log("Created users table!");
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
})();
