
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnection } from "typeorm";
import session from "express-session";
import connectRedis from "connect-redis";
import cors from "cors";

//--------------------Import Redis ---------------------
import { redis } from "./redis";

//------------------From User-------------------------------

import { RegisterUserResolver } from "./modules/user/Register";
import { MeResolver } from "./modules/user/Me";
import { LoginResolver } from "./modules/user/Login";



const main = async () => {
  await createConnection();

  const schema = await buildSchema({
    resolvers: [MeResolver, RegisterUserResolver, LoginResolver]
  });




  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }: any) => ({ req })
  });

  const app = Express();

  const RedisStore = connectRedis(session);

  app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000" //React application
    })
  );

  app.use(
    session({
      store: new RedisStore({
        client: redis
      }),
      name: "qid",
      secret: "aslkdfjoiq12312",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365 // 7 years
      }
    })
  );

  app.use(
    cors()
  );

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });

};

main();
