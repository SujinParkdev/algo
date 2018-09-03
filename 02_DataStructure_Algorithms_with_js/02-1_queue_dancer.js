// 스퀘어 댄스 파티에 남녀가 줄을 선다
// 남녀가 각자 성별로 줄을 서고 첫번째 남자와 첫번째 여자가 짝이 된다.
// 맨 앞줄에 남은 남자가 없으면 이 사실을 공지한다

var dancers = [
  "F Allison MxMillan",
  "M Frank Opitz",
  "M Mason McMillan",
  "M Clayton Ruff",
  "F Cheryl Ferencack",
  "M Raymand Williams",
  "F Jennifer Ingram",
  "M Bryan Frazer",
  "M David Durr",
  "M Danny Martin",
  "F Aurora Adny"
]

function Queue() {
  this.dataStore = [];
  this.enqueue = enqueue;
  this.dequeue = dequeue;
  this.front = front;
  this.back = back;
  this.toString = toString;
  this. empty = empty;
  this.count = count;
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


function Dancer(name, sex) {
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females) {
  var names = this.dancers.split(" ")
  for (var i = 0; i < names.length; ++i) {
    names[i] = names[i].trim();
  }
  console.log(names);
}

function dance(males, females) {
  console.log("the dance partners are: |n")
  while (!females.empty() && !males.empty()) {
    person = females.dequeue();
    console.log("Female dancer is: " + person.name);
    person = males.dequeue();
    console.log(" and the male dancer is: " + person.name);
  }
  console.log();
}

function count() {
  return this.dataStore.length;
}

var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);
