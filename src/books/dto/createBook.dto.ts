import { IsInt, IsString } from "class-validator";


export class createBookDto{
    @IsInt()
    id: number;
    @IsString()
     title: string;
       
    @IsInt()
     publishedYear: number;
     @IsString()
     publisher: string;

}