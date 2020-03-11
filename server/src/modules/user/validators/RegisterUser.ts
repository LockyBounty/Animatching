import { Length } from 'class-validator';
import { Field, InputType } from "type-graphql";
import { isUserAlreadyExists } from './isUserAlreadyExists';

@InputType()
export class RegisterStore{
  @Field()
  @Length(1,255)
  @isUserAlreadyExists({message: "Username already exists"})
  shopName:string;

  @Field()
  @Length(1,255)
  street: string;

  @Field()
  number: number;

  @Field()
  postalCode: number;

  @Field()
  @Length(1,255)
  city: string;

}
