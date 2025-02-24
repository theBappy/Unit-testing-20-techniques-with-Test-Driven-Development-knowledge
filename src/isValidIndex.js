export const isValidIndex = (array, index) => {
    if(index < 0 || index >= array.length){
        throw new Error("Index out of boundary")
    }
    return 'Index is valid!'
}