// Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.


function evenBinary(n) {
    let numb = n.split(" ");
    let arr = [];
    let even = [];
    let count = 0;
    for (let i = 0; i < numb.length; i++) {
        if (numb[i] % 2 !== 0) arr.push(numb[i]);
        if (numb[i] % 2 === 0) {
            even = numb.filter(it => (it % 2 == 0)).sort();
            arr.push(even[count]);
            count++;
        }
    }
    return arr.join(' ');
}