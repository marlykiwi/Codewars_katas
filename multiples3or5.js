// My solution from 2020 Aug/Sep

function solution(number) {
    count = 0;
    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) count += i;
    }
    return count;
}