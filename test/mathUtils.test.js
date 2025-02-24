import { describe, it, expect } from "vitest";
import {add, subtract, multiply, divide} from '../src/mathUtils'


describe('Math Utilities', () => {
    it('should sum two numbers', ()=>{
        expect(add(2,3)).toBe(5);
        expect(add(-1,1)).toBe(0);
    });
    it('should subtract to numbers', ()=>{
        expect(subtract(10,4)).toBe(6);
        expect(subtract(100,10)).toBe(90);
    });
    it('should multiply two numbers', ()=>{
        expect(multiply(3,4)).toBe(12);
        expect(multiply(-2,3)).toBe(-6);
    });
    it('should divide one number by another', ()=>{
     expect(divide(6,3)).toBe(2);
     expect(divide(5,2)).toBe(2.5);   
    });

    it('should throw new error when dividing by zero', ()=>{
        expect(()=> divide(5, 0)).toThrow("Division by zero is not allowed");
    });
    
})


//  AAA Pattern


// describe("Math utilitiest", () =>{
//     test('adds numbers correctly', ()=>{
//         // Arraange: Set up the data
//         const a = 1;
//         const b = 1;

//         // Act: Perform the action (eg.call the function or call the value)
//         const result = a + b;

//         // Assert(varify the expeced result)
//         expect(result).toBe(2);

//     })
// })




