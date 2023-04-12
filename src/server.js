import express from "express";
import db from "./db/db.js";
import routes from "./routes.js";

const app = express();

app.use(express.json());
app.use(routes);

try {
	await db.sync({ force: true });
	console.log("A conexão com o bd foi bem sucedida!");

	app.listen(3333, () => {
		console.log("Servidor iniciano na porta 3333");
	});

} catch (error) {
	console.log("Não foi possível se conectar com o bd:", error);
	process.exit(1);
}