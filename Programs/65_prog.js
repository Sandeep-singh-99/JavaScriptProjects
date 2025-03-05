// Chain multiple .then() calls where each step depends on the previous result.

new Promise((reslove) => {
    reslove(25);
}).then((result) => {
    console.log(result);
    return result + 5;
}).then((result) => {
    console.log(result);
    return result * 2;
}).then((result) => {
    console.log(result);
})

