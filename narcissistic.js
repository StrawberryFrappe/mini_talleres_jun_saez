//https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript


function narcissistic(value) {
    const digits = value.toString().split("").map(Number);
    let accum = 0;
    for (const val of digits){
        accum+= val**digits.length;
    }
    return accum==value
}

console.log(narcissistic(153))
