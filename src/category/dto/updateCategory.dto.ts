
import {PartialType} from "@nestjs/mapped-types";
import { createCategoryDto } from "./createCategory.dto";

export class updateCategoryDto extends PartialType(createCategoryDto){

}