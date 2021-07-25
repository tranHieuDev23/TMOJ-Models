export class Announcement {
    constructor(
        public readonly announcementId: string,
        public readonly timestamp: Date,
        public readonly content: string
    ) {}
}
