import { add, subtract, multiply, divide } from './script';

describe('足し算の場合', () => {
    describe('引数チェック', () => {
        test('引数が31個だとエラーになること', () => {
            const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
            expect(() => add(numberArray)).toThrow('error_over');
        });
        test('引数が数字以外だとエラーになる', () => {
            const numberArray = ["いちご", "りんご", "みかん"]
            expect(() => add(numberArray)).toThrow('error_not_number');
        });
        test('引数が空欄だとエラーになる', () => {
            const numberArray = []
            expect(() => add(numberArray)).toThrow('error_empty');
        });
    });
    test('合計が返ること', () => {
        const numberArray = [100, 200]
        expect(add(numberArray)).toBe(300);
    })

    test('計算結果が1000を超える場合は合計ではなく「too big」と文字列が返る', () => {
        const numberArray = [500, 900]
        expect(() => add(numberArray)).toThrow("too big")
    })
});

describe('引き算の場合', () => {
    describe('引数チェック', () => {
        test('引数が31個だとエラーになること', () => {
            const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
            expect(() => subtract(numberArray)).toThrow('error_over');
        });
        test('引数が数字以外だとエラーになる', () => {
            const numberArray = ["いちご", "りんご", "みかん"]
            expect(() => subtract(numberArray)).toThrow('error_not_number');
        });
        test('引数が空欄だとエラーになる', () => {
            const numberArray = []
            expect(() => subtract(numberArray)).toThrow('error_empty');
        });
    });
    test('計算結果が返ること', () => {
        const numberArray = [10, 3]
        expect(subtract(numberArray)).toBe(7);
    })
    test('計算結果がマイナスの場合は「negative number」と文字列が返る', () => {
        const numberArray = [3, 9]
        expect(() => subtract(numberArray)).toThrow("negative number");
    })
})

describe('掛け算の場合', () => {
    describe('引数チェック', () => {
        test('引数が31個だとエラーになること', () => {
            const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
            expect(() => multiply(numberArray)).toThrow('error_over');
        });
        test('引数が数字以外だとエラーになる', () => {
            const numberArray = ["いちご", "りんご", "みかん"]
            expect(() => multiply(numberArray)).toThrow('error_not_number');
        });
        test('引数が空欄だとエラーになる', () => {
            const numberArray = []
            expect(() => multiply(numberArray)).toThrow('error_empty');
        });
    });
    test('計算結果が返ること', () => {
        const numberArray = [10, 15];
        expect(multiply(numberArray)).toBe(150)
    })
    test('計算結果が1000を越える場合は「big big number」と文字列が返る', () => {
        const numberArray = [100, 150];
        expect(() => multiply(numberArray)).toThrow('big big number');
    })
})


describe('割り算の場合', () => {
    describe('引数チェック', () => {
        test('引数が31個だとエラーになること', () => {
            const numberArray = Array(31).fill(1);
            expect(() => divide(numberArray)).toThrow('error_over');
        });
        test('引数が数字以外だとエラーになる', () => {
            const numberArray = ["いちご", "りんご", "みかん"]
            expect(() => divide(numberArray)).toThrow('error_not_number');
        });
        test('引数が空欄だとエラーになる', () => {
            const numberArray = []
            expect(() => divide(numberArray)).toThrow('error_empty');
        });
    });
    test('計算結果が返ること', () => {
        const numberArray = [15, 3];
        expect(divide(numberArray)).toBe(5);
    })
    test('少数を切り捨てて、計算結果が返ること', () => {
        const numberArray = [16, 3];
        expect(divide(numberArray)).toBe(5);
    })
})