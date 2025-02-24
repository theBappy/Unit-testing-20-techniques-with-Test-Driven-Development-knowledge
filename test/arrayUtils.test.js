import { describe, expect, it } from "vitest";
import {sum, findMax, findMin, filterEven, filterOdd} from '../src/arrayUtils'


describe('Array utilities', () => {
    it('should correct sum or array', () => {
        expect(sum([1,2,3])).toBe(6);
        expect(sum([-4,5,6])).toBe(7);
    })
    it('should return the max value from array', ()=>{
        expect(findMax([14,25,6,77])).toBe(77);
        expect(findMax([10,5,100,50])).toBe(100);
    })
    it('should return the min value from array', ()=>{
        expect(findMin([1,12,32,5])).toBe(1);
        expect(findMin([-10,10,0])).toBe(-10);
    })
    it('should return the even numbers from the array', ()=>{
        expect(filterEven([1,2,3,4,5]))
    })
})   