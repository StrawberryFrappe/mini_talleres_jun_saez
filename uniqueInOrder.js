//https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript

var uniqueInOrder = function (iterable) {

    var result = []

    Array.from(iterable).forEach(value => {
        if (result[result.length-1] != value){
            result.push(value)
        }
    })

    return result;
}


console.log(uniqueInOrder('AAAABBBCCDAABBB'));
//[ 'A', 'B', 'C', 'D', 'A', 'B' ]