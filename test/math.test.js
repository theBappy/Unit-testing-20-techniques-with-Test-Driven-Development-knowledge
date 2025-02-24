import { describe, it, expect } from "vitest";
import { add } from "../src/math";


describe('math', () =>{
    
    // Positive testing
    it('should add valid numbers' , () =>{
        expect(add(3,5)).toBe(8);
        expect(add(10,20)).toBe(30);
        expect(add(0,0)).toBe(0);
    })

    // Negative testing
    it('should throw error adding invalid input type', () =>{
        expect(() => add(3, '5')).toThrow('both inputs must be numbers')
        expect(() => add('3', '5')).toThrow('both inputs must be numbers')
        expect(() => add(5, null)).toThrow('both inputs must be numbers')
    })
})


