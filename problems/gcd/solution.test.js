import { expect, test, describe } from 'vitest';
import { gcd } from './solution.js';

describe('최대공약수(GCD) 테스트', () => {
  test('기본적인 GCD 계산', () => {
    expect(gcd(12, 18)).toBe(6);
    expect(gcd(48, 36)).toBe(12);
    expect(gcd(17, 23)).toBe(1);  // 서로소
  });

  test('음수 입력 처리', () => {
    expect(gcd(-12, 18)).toBe(6);
    expect(gcd(48, -36)).toBe(12);
    expect(gcd(-48, -36)).toBe(12);
  });

  test('0이 포함된 경우', () => {
    expect(gcd(0, 5)).toBe(5);
    expect(gcd(5, 0)).toBe(5);
  });
});