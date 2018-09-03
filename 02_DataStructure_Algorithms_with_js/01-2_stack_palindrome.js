// Stack을 이용한 palindrome(회문)
// 회문(回文) 또는 팰린드롬(palindrome)은 거꾸로 읽어도 제대로 읽는 것과 같은 문장이나 낱말이다.
// 보통 낱말 사이에 있는 띄어쓰기나 문장 부호는 무시한다.

// 알고리즘
// 1. 문자열을 받아 왼쪽에서 오른쪽으로 각 문자를 스택에 추가
// 2. 끝까지 추가한 뒤 마지막 문자는 스택의 탑에, 첫문자는 스택의 바텀에 위치
// 3. 스택에 문자열을 모두 추가한 뒤 각 문자를 꺼내 새 문자열을 만든다(역순으로 바꾼 문자열이 만들어짐)
// 4. 역순으로 바뀐 문자열과 원래 문자열을 비교한다


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

function isPalindrome(word) {
  var s = new Stack();
  for (var i = 0; i < word.length; ++i) {
    s.push(word[i]);
  }
  var rword = "";
  while (s.length > 0) {
    rword += s.pop();
  }
  if (word == rword) {
    return true;
  } else {
    return false;
  }
}

var word = "hello";
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log (word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + "is not a palindrome.");
}