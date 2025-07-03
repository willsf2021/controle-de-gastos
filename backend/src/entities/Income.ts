import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";

@Entity("receitas")
export class Income {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  valor!: number;

  @Column({ type: "date" })
  data!: Date;

  @ManyToOne(() => User, (user) => user.receitas, {
    onDelete: "CASCADE",
    eager: true,
  })
  usuario!: User;

  @CreateDateColumn({ name: "criado_em" })
  criado_em!: Date;

  @UpdateDateColumn({ name: "atualizado_em" })
  atualizado_em!: Date;
}
