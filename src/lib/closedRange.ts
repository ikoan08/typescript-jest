export class ClosedRange {
    private lower: number;
    private upper: number;

    constructor(lower: number, upper: number) {
        if (!Number.isInteger(lower) || !Number.isInteger(upper)) {
            throw new Error("端点は整数のみです");
        }

        if (lower > upper) {
            [lower, upper] = [upper, lower];
        }
        this.lower = lower;
        this.upper = upper;
    }

    public getLower(): number {
        return this.lower;
    }
    public getUpper(): number {
        return this.upper;
    }
    public toString(): string {
        return `[${this.lower},${this.upper}]`;
    }
    public includes(target: number): boolean {
        if (!Number.isInteger(target)) return false;
        return this.lower <= target && target <= this.upper;
    }
    public isEqual(targetRange: ClosedRange): boolean {
        return (
            this.lower === targetRange.lower && targetRange.upper === this.upper
        );
    }
    public isProperSubset(targetRange: ClosedRange): boolean {
        if (this.isEqual(targetRange)) return false;
        return (
            this.lower <= targetRange.lower && targetRange.upper <= this.upper
        );
    }
}
