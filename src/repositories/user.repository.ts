import { db } from "../config/db";
import { UserModel } from "../models/user.model";

export const userRepository = {

  getAll(): UserModel[] {
    const stmt = db.query("SELECT * FROM users");
    return stmt.all() as UserModel[];
  },

  create(user: { name: string; role: string }) {
    db.run(
      "INSERT INTO users (name, role) VALUES (?, ?)",
      [user.name, user.role]
    );
  },

  delete(id: number) {
    db.run("DELETE FROM users WHERE id = ?", [id]);
  }

};