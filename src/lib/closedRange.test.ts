import { ClosedRange } from "./closedRange";

describe("上端点・下端点を引数とし、閉区間を表現するClosedRange Class", () => {
    describe("コンストラクタ引数である下端点、上端点は整数のみを受け付ける", () => {
        test("引数が両方とも整数だったら、インスタンスを正常に返す", () => {
            expect(new ClosedRange(1, 2)).toBeInstanceOf(ClosedRange);
        });

        describe("引数が整数では無かったら、例外を投げる", () => {
            test.each([
                ["下端点、上端点ともに少数", 0.9, 2.1],
                ["下端点が少数", 0.9, 2],
                ["上端点が少数", 1, 2.1],
            ])("%s", (_desc: string, lower: number, upper: number) => {
                expect(() => new ClosedRange(lower, upper)).toThrow();
            });
        });
    });

    describe("下端点をgetLower()で取得できる", () => {
        test.each([
            [1, 2, 1],
            [2, 1, 1],
        ])(
            "引数が%i, %iだったら下端点として%iを返す",
            (lower, upper, expected) => {
                expect(new ClosedRange(lower, upper).getLower()).toBe(expected);
            }
        );
    });
    describe("上端点をgetUpper()で取得できる", () => {
        test.each([
            [1, 2, 2],
            [2, 1, 2],
        ])(
            "引数が%i, %iだったら上端点として%iを返す",
            (lower, upper, expected) => {
                expect(new ClosedRange(lower, upper).getUpper()).toBe(expected);
            }
        );
    });
    describe("閉区間の文字列表現をtoString()で返す", () => {
        test("上端点が1,下端点が2の閉区間は文字列'[1,2]'を返す", () => {
            expect(new ClosedRange(1, 2).toString()).toBe("[1,2]");
        });
    });
    describe("includes(整数)でその整数が閉区間に含まれているかを判定する", () => {
        describe("上端点が0下端点が2の閉区間に与えた整数が含まれるかどうかをブール値で返す", () => {
            test.each([
                ["下端未満の時はfalseを返す", -1, false],
                ["下端の時はtrueを返す", 0, true],
                ["下端未満の時はfalseを返す", -1, false],
                ["下端より大きく、上端未満の時はtrueを返す", 1, true],
                ["上端の時はtrueを返す", 2, true],
                ["上端より大きい時はfalseを返す", 3, false],
                ["整数以外の時はfalseを返す", 0.1, false],
            ])("%s", (_desc, target, expected) => {
                expect(new ClosedRange(0, 2).includes(target)).toBe(expected);
            });
        });
        describe("上端点と下端点が共に2の閉区間に与えた整数が含まれるかどうかをブール値で返す", () => {
            test.each([
                ["2未満の時はfalseを返す", 1, false],
                ["2の時はtrueを返す", 2, true],
                ["2より大きい時はfalseを返す", 3, false],
            ])("%s", (_desc, target, expected) => {
                expect(new ClosedRange(2, 2).includes(target)).toBe(expected);
            });
        });
    });

    describe("isProperSubset(閉区間)でその閉区間が真部分集合かどうかを判定する", () => {
        describe("[1,3]の真部分集合かどうかをブール値で返す", () => {
            test.each([
                [1, 2, true],
                [0, 3, false],
                [1, 3, false],
            ])("[%i,%i]は%pを返す", (lower, upper, expected) => {
                expect(
                    new ClosedRange(1, 3).isProperSubset(
                        new ClosedRange(lower, upper)
                    )
                ).toBe(expected);
            });
        });
    });

    describe("isEqual(閉区間)でその閉区間と等価かどうかを判定する", () => {
        describe("[1,3]と等価かどうかをブール値で返す", () => {
            test.each([
                [1, 3, true],
                [1, 2, false],
                [0, 3, false],
            ])("[%i,%i]は%pを返す", (lower, upper, expected) => {
                expect(
                    new ClosedRange(1, 3).isEqual(new ClosedRange(lower, upper))
                ).toBe(expected);
            });
        });
    });
});
