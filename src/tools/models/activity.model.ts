import { ActivityTypeModel } from "./activity-type.model";
import { AuditModel } from "./audit.model";

export class ActivityModel {
    id: string;
    name: string;
    type: ActivityTypeModel;
    audit: AuditModel;
}