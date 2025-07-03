import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "O nome é obrigatório." })
  nome!: string;

  @IsEmail({}, { message: "E-mail inválido." })
  @IsNotEmpty({ message: "O e-mail é obrigatório." })
  email!: string;

  @IsNotEmpty({ message: "A senha é obrigatória." })
  @MinLength(6, { message: "A senha deve ter no mínimo 6 caracteres." })
  senha!: string;
}
