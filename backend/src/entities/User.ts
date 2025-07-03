import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Category } from "./Category";
import { Expense } from "./Expense";
import { Income } from "./Income";

@Entity("usuarios")
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nome!: string;

  @Column({ unique: true })
  email!: string;

  @Column()
  senha!: string;

  @OneToMany(() => Category, (categoria) => categoria.usuario)
  categorias!: Category[];

  @OneToMany(() => Expense, (despesa) => despesa.usuario)
  despesas!: Expense[];

  @OneToMany(() => Income, (receita) => receita.usuario)
  receitas!: Income[];

  @CreateDateColumn({ name: "criado_em" })
  criado_em!: Date;

  @UpdateDateColumn({ name: "atualizado_em" })
  atualizado_em!: Date;
}
