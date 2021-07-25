import { User } from "./user";
import { Problem } from "./problem";

export enum SubmissionLanguage {
    C = "C",
    Cpp = "Cpp",
    Java = "Java",
    Python3 = "Python3",
}

export enum SubmissionStatus {
    Submitted = "Submitted",
    InQueue = "InQueue",
    Judging = "Judging",
    Accepted = "Accepted",
    CE = "CE",
    TLE = "TLE",
    MLE = "MLE",
    RuntimeError = "RuntimeError",
    WA = "WA",
}

export class Submission {
    constructor(
        public readonly submissionId: string,
        public readonly author: User,
        public readonly problem: Problem,
        public readonly sourceFile: string,
        public readonly language: SubmissionLanguage,
        public readonly submissionTime: Date,
        public readonly status: SubmissionStatus,
        public readonly score: number,
        public readonly log: string
    ) {}
}
