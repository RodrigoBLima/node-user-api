import SqliteAdapter from "../infra/database/SqliteAdapter";
const md5 = require("md5");

test("Created a new user", async function () {
  const connection = new SqliteAdapter();
  connection.initialize();

  const insert = "INSERT INTO user (name, email, password) VALUES (?,?,?)";
  await connection.query(insert, ["Rodrigo", "admin@example.com", md5("barbosa245")], {})

  const userData = await connection.query(
    "select * from user where email = ?",
    "admin@example.com",
    (err: any, row: any) => {
      return row;
    }
  );

  // todo make assertion
});
