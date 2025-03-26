// 시간 초과로 실패
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    // // 뒷 숫자 리스트   
    // // const testList = numbers.slice(i+1)
    // // 뒷 숫자 리스트 중 가장 큰 수 -> 가장 큰 수가 아니라 그냥 뒤 중 크면 바로 Return
    // // const maxNumber = Math.max(...testList)
    // 없으면 -1
    let bigNumber = -1 

    // i + 1 부터 for문 돌면서 크면 바로 저장 후 break
    for ( let j = i+1; j < numbers.length; j++){
      if(numbers[i] < numbers[j]){
        bigNumber = numbers[j]
        break
      }
    }

    answer.push(bigNumber)
  }

  return answer;
}