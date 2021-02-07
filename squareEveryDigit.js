function squareDigits(num) {
    let arr = [];
    let all = num.toString().split("").map(it => {
        arr.push(Number(it) * Number(it));
    })
    return Number(arr.join(""))
}
