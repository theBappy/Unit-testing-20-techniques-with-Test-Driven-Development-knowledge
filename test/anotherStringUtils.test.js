import { describe, expect, it } from "vitest";

import {reverseString, capitalizeWords, isPallindrome} from '../src/anotherStringUtils'

describe("String utils", ()=>{
    it('should reverse a string', ()=>{
        expect(reverseString('hello')).toBe('olleh');
    })
    it('should capitalize the words', ()=>{
        expect(capitalizeWords('hello world')).toBe('Hello World');
    })
    it('should check for pallindrom', ()=>{
        expect(isPallindrome('racecar')).toBe(true);
        expect(isPallindrome('noon')).toBe(true);
        expect(isPallindrome('hello')).toBe(false);
    })
})