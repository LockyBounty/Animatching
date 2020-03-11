import { Resolver, Query } from 'type-graphql';
//import { User } from "../../entity/User";

@Resolver()

export class RegisterUserResolver{
  @Query(() => String)
  async hello(){
    return "Hello World!";
  }
}
