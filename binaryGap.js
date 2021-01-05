function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function binaryGap(n) {
    let binaryN = dec2bin(n);
    let arr = binaryN.split('');
    let gapLength = 0;


    if(n < 0 || n > 2147483647 || !arr.includes("0")) {
        return 0;
    }


    while(arr.includes("1")) {
        let left = arr.indexOf("1");
        arr = arr.slice(left + 1);
        let right = arr.indexOf("1");
        arr = arr.slice(right);
        if(gapLength < right - left) {
            gapLength = right - left;
        }
    } 

    return gapLength;

}

const factorial = n => {
    
   const cache = {};

   if(n < 2) {
       return 1;
   }


   if(!(n in cache)) {
        cache[n] = n * factorial(n-1)
   }


   return cache[n];

}

console.log(factorial(6));