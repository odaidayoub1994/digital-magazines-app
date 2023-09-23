import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { User } from "./user";
import CONSTANTS from "../common/constants";

@Entity({ name: CONSTANTS.ENTITIES.MAGAZINES })
export class Magazine {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 50 })
  title: string;

  @Column({ unique: true })
  author: string;

  @Column({ type: "float8" })
  subscription_price: string;

  @Column({ default: false })
  is_deleted: boolean;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at!: Date;

  // @OneToMany(() => User, (user) => user.company)
  // users: User[];
}
