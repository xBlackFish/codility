function fibo(n) {
    let result = 0;
    let previous = 1;
    let tmp;

    if(n < 1) {
        return n;
    }

    while(n > 0) {
        tmp = previous;
        previous = result;
        result = previous + tmp;
        n--;
    }

    return result;

}

console.log(fibo(5))


//this

function showName() {
    return this.name.toUpperCase();
}


var me = {
    name: "Joe"
}

var you = {
    name: "Yoy"
}

console.log(showName.call(me))
console.log(showName.call(you))
