import { configDotenv} from "dotenv";
import dotenv  from "dotenv";
import Server from "./models/server";

//configuaramos dotenv
dotenv.config();

const server = new Server;

server.listen();