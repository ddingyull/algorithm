// npm test problems/49994_방문길이/solution.test.js -- --watch
import { expect, test, describe } from 'vitest';
import countUniqueRoutes from './solution.js';

describe('', () => {
  test('방문길이는?', () => {
    const result = countUniqueRoutes('LULLLLLLU');
    console.log('테스트 결과:', result);  // 실제 반환값 확인
    expect(result).toBe(7);
  });
});