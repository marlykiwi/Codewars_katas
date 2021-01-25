function highAndLow(numbers) {
    let items = numbers.split(" ").map(it => Number(it));
    return max = String(Math.max(...items)) + " " + String(Math.min(...items));
}