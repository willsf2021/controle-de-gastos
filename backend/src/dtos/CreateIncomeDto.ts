import { IsNotEmpty, IsNumber, IsDateString } from "class-validator";

export class CreateIncomeDto {
  @IsNumber()
  @IsNotEmpty({ message: "O valor é obrigatório." })
  valor!: number;

  @IsDateString(
    {},
    { message: "A data deve estar no formato ISO (YYYY-MM-DD)." }
  )
  data!: string;
}
