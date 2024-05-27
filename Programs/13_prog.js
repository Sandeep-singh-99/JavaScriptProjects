const concatenator = (OriginalStr) => {
    return (strTwo) => {return `${OriginalStr} ${strTwo}`}
}

console.log(concatenator('hello')('world'));