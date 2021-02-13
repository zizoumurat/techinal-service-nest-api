import { GroupModel } from "../models/group.model";
import { RoleModel } from "../models/role.model";

export class UserCreateDto {
    name:string;
    surname:string;
    password: string;
    image: string;
    email:string;
}

export class UserUpdateDto {
    name:string;
    surname:string;
    password: string;
    image: string;
    email:string;
    roles: RoleModel[];
    groups: GroupModel[];
}

export class UserLoginDto {
    email: string;
    password: string;
}