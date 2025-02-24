import { describe, expect, it } from "vitest";
import { capitalize, reverse, toLowerCase, toUpperCase } from "../src/stringUtils";


describe("string utilities", ()=>{
    it('should return string in uppercase', () => {
        expect(toUpperCase('hello')).toBe('HELLO');
        expect(toUpperCase('bappy')).toBe('BAPPY');
    })
    it('should return string in lowercase', ()=>{
        expect(toLowerCase('HELLO')).toBe('hello');
        expect(toLowerCase('WORLD')).toBe('world');
    })
    it('should capitalize first letter of string', ()=> {
        expect(capitalize('hello')).toBe('Hello');
        expect(capitalize('bappy')).toBe('Bappy');
    })
    it('should reverse the string', ()=>{
        expect(reverse('theBappy')).toBe('yppaBeht');
        expect(reverse('hello')).toBe('olleh');
    })
})