import { describe, expect, it } from "vitest";
import { flattenArray, intersectArray, removeDuplicates } from "../src/arrayObjUtils";


describe("Array Utils", () =>{
    it("should flatten a nested array", () => {
        expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
    });

    it('should find intersection of arrays', ()=>{
       expect(intersectArray([1,2,3], [3,4,5])).toEqual([3]); 
    })

    it('should remove the duplicates from array', () =>{
        expect(removeDuplicates([1,2,3,2,3,4,5,6])).toEqual([1,2,3,4,5,6])
    })
})