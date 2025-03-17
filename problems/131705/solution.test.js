// npm test problems/131705/solution.test.js -- --watch
import { expect, test, describe } from 'vitest';
import findTrioCount from './solution.js';

describe('삼총사 개수는?', () => {
  test('기본적인 계산', () => {
    const result = findTrioCount([-2, 3, 0, 2, -5]);
    console.log('테스트 결과:', result);  // 실제 반환값 확인
    expect(result).toBe(2);
  });
});