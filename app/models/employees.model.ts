import { Role } from "./roles.model";
import { Team } from "./teams.model";

export class Employee{
    constructor(
        public id?:number,
        public firstName?:string,
        public lastName?:string,
        public email?:string,
        public role?:string,
        public team?:string,
        public password?:string
    ){

    }
}