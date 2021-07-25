import { User } from "./user";
import { Problem } from "./problem";
import { Contest } from "./contest";
import { TestCase } from "./testcase";

/**
 * The programming language of the submission.
 */
export enum SubmissionLanguage {
    /**
     * C, using gcc 11.1.
     */
    C = "C",
    /**
     * C++ 17, using g++ 11.1.
     */
    Cpp = "Cpp",
    /**
     * Java 13.0.1, using OpenJDK.
     */
    Java = "Java",
    /**
     * Python 3.9.
     */
    Python3 = "Python3",
}

/**
 * The status of the submission.
 */
export enum SubmissionStatus {
    /**
     * Source file just uploaded.
     */
    Submitted = "Submitted",
    /**
     * Added into the judge queue.
     */
    InQueue = "InQueue",
    /**
     * Currently compiling.
     */
    Compiling = "Compiling",
    /**
     * Compile Error - submission failed.
     *
     * The submission's log should contain the compiler's error log.
     */
    CE = "CE",
    /**
     * Currently running through test cases.
     *
     * The submission's log should contain the current number of test cases
     * passed.
     */
    Judging = "Judging",
    /**
     * Time Limit Exceeded - submission failed.
     */
    TLE = "TLE",
    /**
     * Memory Limit Exceeded - submission failed.
     */
    MLE = "MLE",
    /**
     * Runtime Error - submission failed.
     */
    RuntimeError = "RuntimeError",
    /**
     * Wrong Answer - submission failed.
     */
    WA = "WA",
    /**
     * Accepted - The submission passed all test cases.
     */
    Accepted = "Accepted",
}

/**
 * A code submission from the user.
 */
export class Submission {
    constructor(
        /**
         * The id of the submission.
         */
        public readonly submissionId: string,
        /**
         * The user who submitted the submission.
         */
        public readonly author: User,
        /**
         * The problem the submission is submitted for.
         */
        public readonly problem: Problem,
        /**
         * The contest the submission belongs in.
         *
         * If the user is not submitting for a contest, this field's value will
         * be `null`.
         */
        public readonly contest: Contest,
        /**
         * The filename of the source file of the submission on the judge server.
         */
        public readonly sourceFile: string,
        /**
         * The language the submission was written in.
         */
        public readonly language: SubmissionLanguage,
        /**
         * The time the submission was uploaded to the server.
         */
        public readonly submissionTime: Date,
        /**
         * The status of the submission.
         */
        public readonly status: SubmissionStatus,
        /**
         * The score of the submission.
         *
         * This varies between contest format - IOI format allows partial
         * scoring for solution, while ACM format only gives a full score of 1
         * to submissions that pass every single test cases.
         */
        public readonly score: number,
        /**
         * If the submission status is `TLE`, `MLE`, `RuntimeError` or `WA`,
         * this field contains information of the test case the submission
         * failed at.
         *
         * Otherwise, this field contains a value of `null`.
         */
        public readonly failedTestCase: TestCase,
        /**
         * If the submission status is `CE`, `RuntimeError` or `WA`, this field
         * contains the error log of the compiler/solution program/checker.
         *
         * Otherwise, this field contains a value of `null`.
         */
        public readonly log: string
    ) {}
}
