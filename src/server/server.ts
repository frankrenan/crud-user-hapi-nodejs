import Hapi from "@hapi/hapi";
import "dotenv/config";
import "../data";
import { router } from "../route/routes";

const init = async () => {
  const server = Hapi.server({
    port: process.env.API_PORT || 3000,
    host: process.env.API_HOST || "127.0.0.1",
  });

  server.route(router);

  await server.start();

  console.log("Server running on port: %s", server.info.uri);
};

process.on("unhandledRejection", (err) => {
  console.log(err);
  process.exit(1);
});

export { init };
