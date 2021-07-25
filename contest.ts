import { User } from "./user";
import { Problem } from "./problem";
import { Announcement } from "./announcement";

export class Contest {
    constructor(
        public readonly contestId: string,
        public readonly organizer: User,
        public readonly displayName: string,
        public readonly startTime: Date,
        public readonly duration: number,
        public readonly description: string,
        public readonly problems: Problem[],
        public readonly announcements: Announcement[]
    ) {}
}
