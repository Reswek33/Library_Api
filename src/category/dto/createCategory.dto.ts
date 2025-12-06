import { IsInt, IsString } from "class-validator";

export class createCategoryDto{
    @IsInt()
    id: number;

    @IsString()
    name: string;

    @IsString()
    descrption: string;

    
}