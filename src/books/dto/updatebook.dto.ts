
import {PartialType} from "@nestjs/mapped-types";
import { createBookDto } from "./createBook.dto";

export class updateBookDto extends PartialType(createBookDto){

}