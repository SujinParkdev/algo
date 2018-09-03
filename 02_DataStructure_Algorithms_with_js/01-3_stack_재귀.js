// js 스택 동작 설명 : https://www.htmlgoodies.com/primers/jsp/article.php/3622321

// 스택으로 재귀 구현하기
// 5! = 5 * 4 * 3 * 2 * 1 = 120

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
}

// e는 element의 약자
function push(e) {
  // 연산자가 뒤에 있음. 새로운 요소를 추가한 다음 top이 증가(오른쪽에서 왼쪽으로 읽어서 그렇다.)
  this.dataStore[this.top++] = e;
}
function pop() {
  // top요소를 반환한 다음 top변수를 감소시킴
  return this.dataStore[--this.top];
}
function peek() {
  // top-1 위치의 요소에 접근해 스택의 탑 요소 반환
  return this.dataStore[this.top-1];
}
function clear() {
  this.top = 0;
}


function factorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * factorial(n-1);
  }
}

function fact(n) {
  var s = new Stack();
  while (n>1) {
    s.push(n--);
  }
  var product = 1;
  while (s.length > 0) {
    product *= s.pop();
  }
  return product;
}

console.log(factorial(5));
console.log(fact(5));
