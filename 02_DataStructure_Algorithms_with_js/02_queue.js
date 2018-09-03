// 큐는 리스트의 일종으로 끝부분에 데이터가 삽입되고, 앞부분에서 데이터가 삭제되는 자료구조.
// 일어난 순서대로 데이터를 저장하는 자료구조.
// 가장 나중에 들어간 데이터가 가장 먼저 처리됨(선입선출,first-in first-out)

// enqueue : 큐에 끝부분에서 요소를 삽입
// dequeue : 큐에 앞부분에서 요소를 삭제
// peek : 큐의 앞부분에 있는 요소를 확인(반환하지는 않음)
// length : 큐의 개수 확인
// clear : 큐의 모든 요소 삭제

// 자바스크립트 배열은 queue 클래스를 구현하는데 도움을 준다.
// push() 함수 - 배열 끝부분에 데이터 추가
// shift() 함수 - 배열 앞부분에 데이터를 삭제

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this. empty = empty;
}

function enqueue(element) {
  this.dataStore.push(element);
}
function dequeue() {
  return this.dataStore.shift();
}
function front() {
  return this.dataStore[0];
}
function back() {
  return this.dataStore[this.dataStore.length-1];
}
// 큐의 모든 요소를 출력해주는 toString()
function toString() {
  var retStr = "";
  for (var i = 0; i<this.dataStore.length; ++i) {
    // |n은 줄바꿈
    retStr += this.dataStore[i] + "|n";
  }
  return retStr;
}
// 큐가 비었는지 알려주는 empty()
function empty() {
  if (this.dataStore.length == 0) {
    return true;
  } else {
    return false;
  }
}

var q = new Queue();
q.enqueue("Sujin");
q.enqueue("Brett");
q.enqueue("jahnn");
q.dequeue();
console.log(q.toString());
console.log("front of queue : " + q.front());
console.log("back of queue : " + q.back());
