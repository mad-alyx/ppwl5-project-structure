import { app } from "./app";
import { env } from "./config/env";
import { initDB } from "./config/db";

initDB();

app.listen(env.PORT);

console.log(`🚀 Server running on http://localhost:${env.PORT}`);