import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import CONSTANTS from "../common/constants";

export enum UserRole {
  ADMIN = "admin",
  USER = "user"
}

@Entity({ name: CONSTANTS.ENTITIES.USERS })
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ length: 100 })
  fullName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER
  })
  role: string;

  @Column({ default: false })
  is_deleted: boolean;

  // @ManyToOne(() => Company, (company) => company.users, { nullable: true })
  // company: Company | null;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  created_at!: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  updated_at!: Date;
}
