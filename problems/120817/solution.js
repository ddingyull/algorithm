
// 1안
function solution(numbers) {
  var answer = 0;
  
  for ( let i = 0; i < numbers.length; i++){
    answer += numbers[i]
  }
  
  return answer / numbers.length
}

// 2안
function solution(numbers) {
  return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}