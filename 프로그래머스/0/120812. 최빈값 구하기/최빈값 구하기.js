function solution(array) {
    const counts = array.map(num => array.filter(el => el === num).length);
    const maxCount = Math.max(...counts);
    const result = array.filter((num, idx) => counts[idx] === maxCount);
    const unique = [...new Set(result)];

    return unique.length > 1 ? -1 : unique[0];
}