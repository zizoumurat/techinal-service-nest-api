import { ActivityTypeModel } from "./activity-type.model";
import { AuditModel } from "./audit.model";
import { InventoryModel } from "./inventory.model";
import { TicketTypeModel } from "./ticket-type.model";
import { UserModel } from "./user.model";

export class Ticket {
    id: string;
    name: string;
    description: string;
    type: TicketTypeModel;
    responsible: UserModel;
    activities: ActivityTypeModel[];
    inventories: InventoryModel[];
    audit: AuditModel
}