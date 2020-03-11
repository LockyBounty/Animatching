import {Entity, PrimaryGeneratedColumn, Column,ManyToOne,BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import {  User } from './User.ts';

@ObjectType()
@Entity()
export class Locate extends BaseEntity  {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    ipAddress: string;

    @Field(type => User)
    @ManyToOne(type => User, user => user.locates)
    user: User;

}
