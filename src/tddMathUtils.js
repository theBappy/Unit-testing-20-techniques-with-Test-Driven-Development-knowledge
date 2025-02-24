export const add = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw new Error('both arguments must be numbers')
    }

    return a + b
}