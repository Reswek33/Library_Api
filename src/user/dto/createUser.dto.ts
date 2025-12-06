import { IsInt, IsString } from "class-validator";

export class createUserDto{
@IsString()
userName: string;

@IsInt()
id: number;

@IsString()
email: string;

@IsString()
role: string;

@IsString()
passwoord: string;
}