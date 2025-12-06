import {PartialType} from "@nestjs/mapped-types";
import { createUserDto } from "./createUser.dto";

export class updateuserDto extends PartialType(createUserDto){

}