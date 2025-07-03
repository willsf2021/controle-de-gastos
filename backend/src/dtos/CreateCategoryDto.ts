import { IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty({ message: 'O nome da categoria é obrigatório.' })
  nome!: string;
}
