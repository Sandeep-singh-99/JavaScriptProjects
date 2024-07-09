const obj = {}
function transform(data) {
    data.name = "JS"
    data = 'Sandeep';
    return data;
}

const newObj = transform(obj)
console.log(obj, newObj);