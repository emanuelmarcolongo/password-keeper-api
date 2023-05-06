import { IsEmail, IsString } from "class-validator";

export class AuthLoginDTO {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}