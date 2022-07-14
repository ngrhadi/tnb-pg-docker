import server from "./server";

const port = process.env.PORT || 5050;

const starter = new Promise((resolve: any, reject) => {
	server
		.listen(port, () => {
			console.log(`Server is running on port ${port}`);
			resolve();
		})
		.on("error", (err: Error) => {
			console.log(err);
			reject(err);
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
		})
		.on("message", (message: any) => {
			console.log(message);
		})
		.on("disconnect", () => {
			console.log("Server is disconnect");
		})
		.on("connect", () => {
			console.log("Server is connect");
		})
		.on("reconnect", () => {
			console.log("Server is reconnect");
		})
		.on("reconnecting", () => {
			console.log("Server is reconnecting");
		})
		.on("reconnect_error", () => {
			console.log("Server is reconnect_error");
		})
		.on("reconnect_failed", () => {
			console.log("Server is reconnect_failed");
		});
})
	.catch((err: Error) => {
		console.log(err);
	})
	.finally(() => {
		console.log("Server is closed");
	});

export default starter;
