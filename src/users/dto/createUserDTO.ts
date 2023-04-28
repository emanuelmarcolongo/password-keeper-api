import { IsString, IsUrl } from "class-validator";

export class CreateUserDTO {

    @IsString()
    name: string;

    @IsUrl()
    email: string;

    @IsString()
    password: string;
}