import { expect, it } from "vitest";


//  toBe: check for strict equality, ===, meaning both values must be same type and value
it('toBe matcher', () =>{
  const result = 5
  expect(result).toBe(5)
})

// toEqual: check for deep equlity: it compares the values by checking the content of objects or arrays , not just their reference
it('toEqual matcher', () =>{
  const obj1 = {name: 'bappy', age: 100}
  const obj2 = {name: 'bappy', age: 100}

  expect(obj1).toEqual(obj2);
  
})


// toStrictEqual: check for deep equality just like toEqual(), but also condider properties like undefined, function, and other types that are not strict equal in certain cases
it('toStrictEqual matcher', () =>{
    const obj1 = {name: 'bappy', age: 100}
    const obj2 = {name: 'bappy', age: 100}
    // const obj2 = {name: 'bappy', age: 100, a:'something else'}
  
    expect(obj1).toStrictEqual(obj2);
    
})

// toBeTruthy: if the value is truthy or falsy
// falsy values: false, 0, null, {}, "", '', ``, undefined, NaN, !true
it('toBeTruthy matcher', () => {
    const value = NaN
    expect(value).toBeFalsy()
    // const value = 1
    // expect(value).toBeTruthy()
})



it('toBeGreaterThan matcher', () =>{
    // const result = 1;
    // expect(result).toBeLessThan(5);

    // const result = 10
    // expect(result).toBeGreaterThan(5)

    // const result = 10
    // expect(result).toBeLessThanOrEqual(5)

    const result = 10
    expect(result).toBeGreaterThanOrEqual(5)
})

it('toContain matcher', () =>{
    const matcher = "Hello, World"
    expect(matcher).toContain('Hello')
})

it('toMatch matcher', () =>{
    const search = "Hello, World"
    // expect(search).toMatch(/world/) // fail because 'w' is in lower case here
    expect(search).toMatch(/World/)
})


it('toHaveProperty matcher' , () =>{
    const obj = {name: 'bappy', age: 100}

    expect(obj).toHaveProperty('name')
})

it('toBeDefinded matcher', () =>{
    const obj ={ name: 'bappy', age: 100}
    expect(obj.name).toBeDefined()
    // expect (obj.name).toBeUndefined()
})