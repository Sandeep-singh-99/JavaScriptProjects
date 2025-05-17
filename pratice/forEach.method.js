let arr = [1,2,3,4,5,6,7,8,9,10]

function myFunction(arr) {
    let data = arr.forEach((num) => {
        console.log(num);
    })
}

myFunction(arr)


function consoleEven(arr) {
  let data = arr
    .map((num) => (num % 2 === 0 ? num * 2 : num * 1))
    .map((item) => (item % 2 === 0 ? item / 2 : item / 1))

  console.log(data)
}

consoleEven(arr)