import { describe, expect, it } from "vitest";
import { isValidIndex } from "../src/isValidIndex";

describe('isValidIndex', () =>{
    const arr = [10,20,30,40,50];

    it('should allow index 0 (first element)', () =>{
     const result =  isValidIndex(arr, 0) 
     expect(result).toBe('Index is valid!')
    })

    it('should allow index 4(last element)',() =>{
        const result = isValidIndex(arr, 4)
        expect(result).toBe('Index is valid!')
    })

    it('should thrown an error for index -1 (out of bounds)', () =>{
     expect(() => isValidIndex(arr, -1)).toThrow('Index out of boundary')
    })

    it('should throw an error for index(out of bounds)',() =>{
        expect(() => isValidIndex(arr, 5)).toThrow('Index out of boundary')
    })


})