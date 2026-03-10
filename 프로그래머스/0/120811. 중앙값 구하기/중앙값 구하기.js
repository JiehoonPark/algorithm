function solution(array) {
    array.sort((a, b) => a - b);
    const length = array.length;
    const middle = Math.floor(length/2);
    return array[middle];
}