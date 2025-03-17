import { expect, test, describe } from 'vitest';
import { sum, multiply, isEven } from './math.js';

// describe로 관련 테스트들을 그룹화
describe('수학 함수 테스트', () => {
  // test()나 it()으로 개별 테스트 케이스 작성
  test('sum 함수는 두 수의 합을 반환해야 함', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  test('multiply 함수는 두 수의 곱을 반환해야 함', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  // 여러 케이스를 테스트할 때는 test.each 사용 가능
  test.each([
    [2, true],
    [3, false],
    [0, true],
    [-4, true],
    [-7, false]
  ])('isEven(%i) => %s', (input, expected) => {
    expect(isEven(input)).toBe(expected);
  });
});