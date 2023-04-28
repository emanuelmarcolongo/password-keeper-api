import { IsString, IsUrl } from "class-validator";

export class CreateCredentialDTO {

    @IsString()
    title: string;

    @IsUrl()
    url: string;


    @IsString()
    username: string;

    @IsString()
    password: string;
}