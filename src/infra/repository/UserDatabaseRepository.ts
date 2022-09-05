import User from "../../domain/entity/User";
import UserRepository from "../../domain/repository/UserRepository";
import Connection from "../database/Connection";

const md5 = require("md5");

export default class UserDatabaseRepository implements UserRepository {
  constructor(readonly connection: Connection) {}

  save(User: User): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async get({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User> {
    const userData = await this.connection.query(
      "select * from user where email = ?",
      email,
      (err: any, row: any) => {
        if (err) {
          return { error: err.message };
        }

        if (email !== row.email) {
          return { error: "E-mail inválido" };
        }

        if (md5(password) !== row.password) {
          return { error: "Senha inválida" };
        }

        row;
      }
    );

    return userData;
  }
}
