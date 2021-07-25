export class TestCase {
    constructor(
        public readonly testCaseId: string,
        public readonly inputFile: string,
        public readonly outputFile: string,
        public readonly isPretest: boolean,
        public readonly isHidden: boolean,
        public readonly score: number
    ) {}
}
