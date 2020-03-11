
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import cors from "cors";


//------------------From User-------------------------------

import { RegisterUserResolver } from "./modules/user/Register";


const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers:[
      RegisterUserResolver,

    ]
  });

  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req })
  });

  const app = Express();

  app.use(
    cors()
  );

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });

};

main();
