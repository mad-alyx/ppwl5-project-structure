export class UserModel {
  id?: number;
  name: string;
  role: string;

  constructor(name: string, role: string) {
    this.name = name;
    this.role = role;
  }
}