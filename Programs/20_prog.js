// const Tech = {name: "Sandeep Singh"}

// Tech.name = 'React'

// console.log(Tech.name);

// React

// const keyword prevents re-assignments

// ***********************************************************************

const Tech = {name: "Sandeep Singh"}
Object.freeze(Tech)
Tech.name = 'React'

console.log(Tech.name);

// Object.freeze(Tech) is freeze the objects