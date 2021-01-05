function dec2bin(dec){
    return (dec >>> 0).toString(2);
}

function binaryGap(n) {
    let binaryN = dec2bin(n);
    let chars = binaryN.split('');


}

[1,2,3,1,1,14,4].reduce((acc, curr) => {
    acc[curr] ? acc[curr]++ : acc[curr] = 1;
    return acc;
}, {})