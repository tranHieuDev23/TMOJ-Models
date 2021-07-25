import { TestCase } from "./testcase";
import { User } from "./user";

export class Problem {
    constructor(
        public readonly problemId: string,
        public readonly author: User,
        public readonly displayName: string,
        public readonly timeLimit: number,
        public readonly memoryLimit: number,
        public readonly inputSource: string,
        public readonly outputSource: string,
        public readonly checker: string,
        public readonly testCases: TestCase[]
    ) {}
}
