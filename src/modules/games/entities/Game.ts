import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { User } from "../../users/entities/User";
import { Genre } from "./Genre";

@Entity("games")
export class Game {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  title: string;

  @ManyToMany(() => User, (user) => user.games)
  users: User[];

  @OneToMany(() => Genre, (genre) => genre.id)
  genres: Genre[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
