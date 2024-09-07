// Closures

// Lexical Scoping

function init() {
    var name = "Sandeep Singh"
    function displayName() {
        console.log(name);
    }
    displayName()
}
init()

//

function makeFunc() {
    const name = "Sandeep Singh Yadav"
    function displayName() {
        console.log(name);
    }
    return displayName
}

const myfunc = makeFunc()
myfunc()