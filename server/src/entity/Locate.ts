import {Entity, PrimaryGeneratedColumn, Column,ManyToOne} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import {  User } from './User.ts';

@ObjectType()
@Entity()
export class Locate {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    date: string;

    @Column()
    ipAddress: string;

    @Field(type => User)
    @ManyToOne(type => User, user => user.locates)
    user: User;

}
