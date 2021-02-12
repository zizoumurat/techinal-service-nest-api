import { RoleModel } from "../models/role.model";
import { RoleDto } from "./role.dto";

export class GroupCreateDto {
    name: string;
}

export class GroupRolesDto {
    roles: RoleDto[];
}