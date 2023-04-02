import { strict as assert } from "assert";
import FizzBuzz from "./fizzbuzz";

let fizzbuzz: FizzBuzz;

beforeEach(() => {
    fizzbuzz = new FizzBuzz();
});

describe("convertメソッドは数を文字列に変換する", () => {
    describe("_3かつ5の倍数の時は変わりにFizzBuzzに変換する", () => {
        test("_15を渡すと文字列「FizzBuzz」を返す", () => {
            assert.equal(fizzbuzz.convert(15), "FizzBuzz");
        });
    });
    describe("_3の倍数の時は数の変わりにFizzに変換する", () => {
        test("_3を渡すと文字列「Fizz」を返す", () => {
            assert.equal(fizzbuzz.convert(3), "Fizz");
        });
    });

    describe("_5の倍数の時は数の変わりにBuzzに変換する", () => {
        test("_5を渡すと文字列「Buzz」を返す", () => {
            assert.equal(fizzbuzz.convert(5), "Buzz");
        });
    });
    describe("_その他の数の時にはそのまま文字列に変換する", () => {
        test("_1を渡すと文字列1を返す", () => {
            assert.equal(fizzbuzz.convert(1), "1");
        });
    });
});
