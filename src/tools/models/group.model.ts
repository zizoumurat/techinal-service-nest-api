import { AuditModel } from "./audit.model";

export class GroupModel {
    id: string;
    name: string;
    description: string;
    audit: AuditModel;
    roles: RoleModel[];
}