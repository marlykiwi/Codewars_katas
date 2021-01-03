// Break number into expanded form
// https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
    let final = '';
    let n = num.toString();
    for (let i = 0; i < n.length; i++) {
        if (n[i] !== '0') {
            final += " + " + n[i] + "0".repeat(n.length - 1 - i);
        }
    }
    return final.slice(3)
}

