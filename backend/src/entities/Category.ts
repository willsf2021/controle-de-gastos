import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Expense } from "./Expense";

@Entity("categorias")
export class Category {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50, nullable: false })
  nome!: string;

  @ManyToOne(() => User, (user) => user.categorias, {
    onDelete: "CASCADE",
    eager: true,
  })
  usuario!: User;

  @OneToMany(() => Expense, (expense) => expense.categoria)
  despesas!: Expense[];

  @CreateDateColumn({ name: "criado_em" })
  criado_em!: Date;

  @UpdateDateColumn({ name: "atualizado_em" })
  atualizado_em!: Date;
}
