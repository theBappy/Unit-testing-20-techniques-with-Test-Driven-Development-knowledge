import { describe, expect, it } from "vitest";
import { factorail, fibonacci, gcd } from "../src/mathFactorial";

describe('Math Utils', () => {
    it('should calculate factorial', ()=>{
        expect(factorail(5)).toBe(120);
        expect(()=> factorail(-1)).toThrow('number must be non-negative');
    });
    it('should calculate greatest common divisor', ()=>{
        expect(gcd(56, 98)).toBe(14);
        expect(gcd(101, 10)).toBe(1);
    });
    it('should generate fibonacci sequence', ()=>{
        expect(fibonacci(5)).toEqual([0,1,1,2,3]);
        expect(()=> fibonacci(-1)).toThrow('number must be non-negative');
    });
})