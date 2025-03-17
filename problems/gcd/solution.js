/**
 * 최대공약수(GCD) 구하기
 * @param {number} a 첫 번째 숫자
 * @param {number} b 두 번째 숫자
 * @returns {number} 두 수의 최대공약수
 */
export function gcd(a, b) {
  // 유클리드 호제법 사용
  a = Math.abs(a);
  b = Math.abs(b);
  
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  
  return a;
}