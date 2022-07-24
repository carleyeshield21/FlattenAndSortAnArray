// This is the link to this JavaScript Coding challenge
// https://www.codewars.com/kata/57ee99a16c8df7b02d00045f/train/javascript
function flattenAndSort(array) {
    let strarr = (array.toString().split(','))
    let arr = []
    for(i=0; i<=strarr.length-1; i++){
        arr.push(parseInt(strarr[i]))
    }
    console.log(array)
    arr.sort(function(a, b){return a-b})
    console.log(arr)
}
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])
console.log('========')
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]])
console.log('========')
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])