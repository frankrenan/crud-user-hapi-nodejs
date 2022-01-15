import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection()
  .then(() => console.log("Deu bom!"))
  .catch((err) => console.log("Deu ruim!", err));
