
import ExpressAdapter from "./infra/api/ExpressAdapter";
import Router from "./infra/api/Router";
import SqliteAdapter from "./infra/database/SqliteAdapter";
import UserDatabaseRepository from "./infra/repository/UserDatabaseRepository";

const connection = new SqliteAdapter()
const httpServer = new ExpressAdapter();
const userRepository = new UserDatabaseRepository(connection)
const router = new Router(httpServer, userRepository);

router.init();
connection.initialize()
httpServer.listen(8080);
