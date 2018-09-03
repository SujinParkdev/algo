//스택은 요소 리스트로 구성되며 top이라 불리는 리스트의 한쪽 끝으로만 요소에 접근 가능하다.
//후입선출(last-in, first-out)구조. 큐는 신체 흐름, 스택은 토하는거 풀스택하다가 토한다로 외웠음

// * 스택의 프로퍼티
// - push로 요소를 스택에 추가, pop으로 스택에서 요소 꺼낼 수 있음 : 원본 배열 변경
// - peek 탑에 있는 내용만 확인 : 원본 배열 변경하지 않음
// - claer : 스택의 모든 요소 삭제
// - length : 스택에 포함된 요소 수 저장
// - empty : 스택에 요소 있는지 여부 알려줌(length로도 확인가능)

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

var s = new Stack();
s.push("Sujin");
s.push("Brett");
s.push("jahnn");
console.log("length: " + s.length);
console.log(s.peek());

var popped = s.pop();
console.log("the popped element is : " + popped);
console.log(s.peek());

s.push("Xiuzhen");
console.log(s.peek());

s.clear();
console.log("length : " + s.length);
console.log(s.peek());
s.push("Xiuzhen");
console.log(s.peek());