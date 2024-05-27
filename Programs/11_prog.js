const carOne = {
    color: "Blue",
    status: {
        running: true,
        passengers: 4,
        wiperFluid: 'empty'
    },
    age: 5,
    miles: 50000,
    value: '8000'
}

const carTwo = {
    color: 'Green',
    status: {
        running: 'yes',
        passengers: 2,
        fuelTank: 'empty'
    },
    value: 9000
}

const combinedCar = {
    ...carOne,
    ...carTwo
}

console.log(combinedCar);

// Any Property name common to both destructured objects will be overwritten by the second onbjects. 