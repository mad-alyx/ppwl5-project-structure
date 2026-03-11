import { Elysia } from "elysia";
import { userRoutes } from "./routes/user.route";

export const app = new Elysia()
  .use(userRoutes);