import { User } from "./user";
import { Problem } from "./problem";

export class Collection {
    constructor(
        public readonly collectionId: string,
        public readonly owner: User,
        public readonly displayName: string,
        public readonly description: string,
        public readonly problems: Problem[]
    ) {}
}
