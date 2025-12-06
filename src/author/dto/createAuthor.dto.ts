import { IsInt, IsString } from "class-validator";



export class CreateAuthorDto{
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsString()
    bio: string;

    @IsString()
    nationality: string;



}