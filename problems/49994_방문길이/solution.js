// U: 위쪽으로 한 칸 가기

// D: 아래쪽으로 한 칸 가기

// R: 오른쪽으로 한 칸 가기

// L: 왼쪽으로 한 칸 가기

// 0,0 -> 5,5

// 지나간 길 중 "처음 걸어본 길의 길이"
// 5,5 넘어가면 무시

export default function countUniqueRoutes(dirs) {
  const dirsList = dirs.split('')

  let x = 0
  let y = 0
  let visited = new Set();


  for(let i=0; i< dirsList.length; i++){
    let nx = x;
    let ny = y;

    // 좌표를 벗어나면 실행 X
    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) continue;

    // 지나간 좌표를 road에 저장하고 중복되면 제거해버리기 (Set으로)
    switch(dirsList[i]){
      case 'U':
        ny += 1;
        break;
      case 'D':
        ny -= 1;
        break;
      case 'R':
        nx += 1;
        break;
      case 'L':
        nx -= 1;
        break;
    }

    // !이렇게하면 중복 경로 저장되고 2로 나눠도 제대로 안됨 
    // const path1 = `${x},${y}-${nx},${ny}`;
    // const path2 = `${nx},${ny}-${x},${y}`;
    
    // 방문한 경로 저장하는데 시작점, 도착점 둘 다 저장하기
    const go = `${x},${y}`;
    const arrive = `${nx},${ny}`;
    const saveData = go < arrive ? `${go}-${arrive}` : `${arrive}-${go}`;
    visited.add(saveData);

    x = nx;
    y = ny;
  }

  return visited.size
}