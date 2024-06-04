// server listening
import { server } from "./server";
import { startStandaloneServer } from "@apollo/server/standalone";

startStandaloneServer(server, {
  listen: { port: 4000 }, // You can specify the port here
}).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

