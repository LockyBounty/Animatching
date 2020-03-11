import { Length } from 'class-validator';
import { Field, InputType } from "type-graphql";
import { isEmailAlreadyExists } from './isEmailAlreadyExists';

@InputType()
export class RegisterStore{
  @Field()
  @Length(1,255)
  @isEmailAlreadyExists({message: "Email already in use!"})
  username:string;

  @Field()
  @Length(1,255)
  birthday: string;

  @Field()
  country: string;


  @Field()
  @Length(1,255)
  city: string;

}
