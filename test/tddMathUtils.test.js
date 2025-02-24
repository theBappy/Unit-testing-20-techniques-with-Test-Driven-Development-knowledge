import { describe, it, expect } from 'vitest';
import { add } from '../src/tddMathUtils'


describe('add function', () =>{
    it('should add two number' , () =>{
        expect(add(4,5)).toBe(9);
    })

    it('should throw an error if arguments are not numbers', () =>{
       expect(() => add(1,'2')).toThrow('both arguments must be numbers');
       expect(() => add('1','2')).toThrow('both arguments must be numbers');
       expect(() => add(5, null)).toThrow('both arguments must be numbers');
    })
})