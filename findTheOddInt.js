// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(A) {
    let arr = [...new Set(A)];
    for (let i = 0; i < arr.length; i++) {
        let filt = A.filter(el => el == arr[i]);
        if (filt.length % 2 !== 0) return arr[i];
    }
}