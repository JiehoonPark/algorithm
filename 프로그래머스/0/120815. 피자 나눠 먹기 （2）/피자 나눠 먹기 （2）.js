function solution(n) {
    // 6과 n의 최대공약수 구하기
    function gcd(a, b) {
        while (b) {
            [a, b] = [b, a % b];
        }
        return a;
    }
    return n / gcd(6, n);
}