// https://www.codewars.com/kata/5277c8a221e209d3f6000b56

function validBraces(braces) {
    let s = braces.split('');
    let count = 0;
    for (let i = 0; i < braces.length; i++) {
        switch (s[i]) {
            case ")":
                count -= 1;
                break;
            case "]":
                count *= 2;
                break;
            case "}":
                count /= 3;
                break;
            case "(":
                count += 1;
                break;
            case "[":
                count /= 2;
                break;
            case "{":
                count *= 3;
                break;
        }
        if (count < 0)
            return false;
    }
    if (count == 0) {
        return true;
    } else {
        return false;
    }
}