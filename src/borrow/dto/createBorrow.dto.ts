import { IsBoolean, isBoolean, IsDate, IsInt } from "class-validator";

export class createBorrowBookDto{
    @IsInt()
    id: number;

    @IsDate()
    borrowedDate: Date;

    @IsDate()
    returnDate: Date;

    @IsBoolean()
    isReturn: boolean;



}