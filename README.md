# 알고리즘 문제 풀이 프로젝트

## 프로젝트 구조
- `/problems`: 알고리즘 문제 풀이 코드
  - 각 문제는 별도의 디렉토리에 저장
  - `solution.js`: 문제 풀이 코드
  - `solution.test.js`: 테스트 코드

## 사용 방법

### 테스트 실행
```bash
# 모든 테스트 실행
npm test

# UI로 테스트 결과 확인
npm run test:ui
```

### 새로운 문제 추가하기
1. `/problems` 디렉토리 아래에 새로운 디렉토리 생성
2. `solution.js`와 `solution.test.js` 파일 생성
3. 문제 풀이 작성 및 테스트 케이스 추가