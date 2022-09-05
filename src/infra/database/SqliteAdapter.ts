import Connection from "./Connection";

const sqlite3 = require("sqlite3").verbose();

export default class SqliteAdapter implements Connection {
  connection: any;

  constructor() {
    this.connection = new sqlite3.Database("db.sqlite");
  }

  initialize() {
    this.connection.run(
      `CREATE TABLE if not exists user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            password text, 
            CONSTRAINT email_unique UNIQUE (email)
            )`
    );
  }

  async query(statement: string, params: any, callback: any): Promise<any> {
    const response = await this.connection.get(statement, params, callback);
    return this.connection.get(statement, params, callback);
  }

  get(command: string, params: any, callback: any) {
    return  this.connection.get(command, params, callback)
  }

  close() {
    this.connection.close();
  }
}
