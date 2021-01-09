// https://www.codewars.com/kata/541c8630095125aba6000c00/

function digital_root(n) {
    let arr = n.toString().split('');

    while (arr.length > 1) {
        let sum = arr.reduce((a, b) => { return +a + +b });
        arr = sum.toString().split('');
    }
    return +arr
}