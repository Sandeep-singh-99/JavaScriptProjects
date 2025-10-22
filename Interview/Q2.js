function fun() {
    console.log("Hello, world!");
}

function fun2(action) {
    action();
    action();
}

fun2(fun);