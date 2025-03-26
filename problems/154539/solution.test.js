// npm test problems/49994_방문길이/solution.test.js -- --watch
import { expect, test, describe } from 'vitest';
import solution from './solution.js';

describe('', () => {
  test('가장 큰 수는?', () => {
    const result = solution([2, 3, 3, 5]);
    console.log('테스트 결과:', result);  // 실제 반환값 확인
    expect(result).toBe([3, 5, 5, -1]);
  });
});