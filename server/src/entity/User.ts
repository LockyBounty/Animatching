import {Entity, PrimaryGeneratedColumn, Column,OneToMany,BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import {  Locate } from './Locate';

@ObjectType()
@Entity()
export class User  extends BaseEntity {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field()
  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Field()
  @Column()
  birthday: string;

  @Field()
  @Column()
  country: string;

  @Field()  
  @Column({ unique: true })
  email: string;

  @Field()
  @Column()
  city: string;

  @Field(type => Locate)
  @OneToMany(type => Locate, locate => locate.user,{ cascade: true})
  locates: [Locate];





}
