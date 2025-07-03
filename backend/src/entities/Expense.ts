import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { User } from "./User";
import { Category } from "./Category";

@Entity("despesas")
export class Expense {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("decimal", { precision: 10, scale: 2 })
  valor!: number;

  @Column({ type: "date" })
  data!: Date;

  @ManyToOne(() => User, (user) => user.despesas, {
    onDelete: "CASCADE",
    eager: true,
  })
  usuario!: User;

  @ManyToOne(() => Category, (categoria) => categoria.despesas, {
    nullable: true,
    eager: true,
  })
  categoria!: Category;

  @CreateDateColumn({ name: "criado_em" })
  criado_em!: Date;

  @UpdateDateColumn({ name: "atualizado_em" })
  atualizado_em!: Date;
}
