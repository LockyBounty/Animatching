import {Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import {  Locate } from './Locate.ts';

@ObjectType()
@Entity()
export class User {

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @Column()
    birthday: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Field(type => Locate)
    @OneToMany(type => Locate, locate => locate.user,{ cascade: true})
    locates: [Locate];





}
