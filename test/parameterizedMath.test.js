import { describe, expect, it } from "vitest";
import { multiply } from "../src/parameterizedMath";

describe('multiply function - Parameterized Test', () =>{
    it.each([
        [2,4,8],
        [5,6,30],
        [5,5,25],
        [2,3,6],
        [-5,-2,10],
        [1, 0, 0],
    ])(
        'should return correct result when multiplying %d and %d (expected:%d)',
        (a, b, expectedResult) => {
            expect(multiply(a,b)).toBe(expectedResult)
        }
    )
})