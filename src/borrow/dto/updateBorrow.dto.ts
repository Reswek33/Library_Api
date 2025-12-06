
import {PartialType} from "@nestjs/mapped-types";
import { createBorrowBookDto } from "./createBorrow.dto";

export class updateBorrowDto extends PartialType(createBorrowBookDto){

}