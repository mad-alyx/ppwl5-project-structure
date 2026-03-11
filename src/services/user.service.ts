import { userRepository } from "../repositories/user.repository";
import type { User } from "../types/user.type";
import { UserModel } from "../models/user.model";

export const userService = {

  getAll(): UserModel[] {
    return userRepository.getAll();
  },

  create(user: User) {
    return userRepository.create(user);
  },

  delete(id: number) {
    return userRepository.delete(id);
  }

};