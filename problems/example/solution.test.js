import { expect, test, describe } from 'vitest';
import { add } from './solution.js';

describe('예제 문제 테스트', () => {
  test('양수 더하기', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(10, 20)).toBe(30);
  });

  test('음수 더하기', () => {
    expect(add(-1, -2)).toBe(-3);
    expect(add(-10, 5)).toBe(-5);
  });
});