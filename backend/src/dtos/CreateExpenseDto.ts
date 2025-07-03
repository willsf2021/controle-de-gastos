import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsOptional,
} from "class-validator";

export class CreateExpenseDto {
  @IsNumber()
  @IsNotEmpty({ message: "O valor é obrigatório." })
  valor!: number;

  @IsDateString(
    {},
    { message: "A data deve estar no formato ISO (YYYY-MM-DD)." }
  )
  data!: string;

  @IsOptional()
  categoriaId?: number;
}
