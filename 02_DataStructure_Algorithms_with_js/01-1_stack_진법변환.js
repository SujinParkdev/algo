// Stack을 이용한 진법 변환

// 숫자 n을 b라는 진법으로 변환할 때의 알고리즘
// 1. n의 가장 오른쪽 숫자는 n%b -> 스택에 추가
// 2. n을 n/b로 치환한다
// 3. n=0이 되고 나머지가 없을 때까지 1, 2번 과정을 반복한다.
// 4. stack에 저장한 숫자를 모두 꺼내 변환된 숫자 문자열을 만든다.
// (근데 위에꺼부터 꺼내서 문자열을 만들면 순서가 바뀌지 않나?)
// # 이 알고리즘은 2진수부터 9진수 사이에만 동작한다

function mulBase(num, base) {
  var s = new Stack();
  do {
    s.push(num % base);
    // Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
    // x /= y는 x = x / y의 축약형
    num = Math.floor(num /= base);
  } while (num > 0);
  var converted = '';
  while (s.length() > 0) {
    converted += s.pop();
  }
  return converted;
}

var num = 32;
var base = 2;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);
num = 125;
base = 8;
var newNum = mulBase(num, base);
console.log(num + " converted to base " + base + " is " + newNum);