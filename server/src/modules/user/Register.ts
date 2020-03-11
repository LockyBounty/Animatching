import { Resolver, Query,Mutation,Arg } from 'type-graphql';
import bcrypt from 'bcryptjs';

import { User } from "../../entity/User";
import { Locate } from "../../entity/Locate";
//import { RegisterInput } from "./register/RegisterInput";
@Resolver()

export class RegisterUserResolver{
  @Query(() => String)
  async hello(){
    return "Hello World!";
  }

  @Mutation(() => User)
  async createUser(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Arg("birthday") birthday: string,
    @Arg("email") email: string,
    @Arg("country") country: string,
    @Arg("city") city: string,
    @Arg("date") date: string,
    @Arg("ipAddress") ipAddress: string
  ):Promise<User>{
    //@Arg("data")
    //: RegisterInput): Promise<User> {

    const hashPassword = await bcrypt.hash(password,12);
 
    const user = await User.create({
      username,
      birthday,
      country,
      email,
      city,
      password:hashPassword,
    }).save();

    const locate = await Locate.create({
      user,
      date,
      ipAddress
    }).save();

    return user;
  }
}
