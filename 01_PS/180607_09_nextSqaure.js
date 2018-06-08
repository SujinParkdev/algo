// 9. 정수제곱근 판별하기

// nextSqaure함수는 정수 n을 매개변수로 받는다. 
// n이 임의의 정수 x의 제곱이라면 (x+1)의 제곱을 리턴하고, 
// n이 임의의 정수 x의 제곱이 아니라면 'no'을 리턴하는 함수를 작성하라. 

// 예를들어 n이 121이라면 이는 정수 11의 제곱이므로 
// (11+1)의 제곱인 144를 리턴하고, 3이라면 'no'을 리턴한다.

function nextSqaure(n){
var nn = Math.floor(n);
if (n===undefined) {
  return 'no';
} else if ((n-nn)===0) {
  if (n===(Math.sqrt(n)*(Math.sqrt(n)))) {
    return (Math.sqrt(n)+1)*(Math.sqrt(n)+1);
  } else {
    return 'no';
  }
};
};

// function nextSqaure(n){
//   var root = Math.sqrt(n);
//   return Number.isInteger(root) ? Math.pow(root +1, 2) : 'no';
}

console.log(nextSqaure());    // no
console.log(nextSqaure(0));   // 1
console.log(nextSqaure(1));   // 4
console.log(nextSqaure(2));   // no
console.log(nextSqaure(3));   // no
console.log(nextSqaure(121)); // 144
console.log(nextSqaure(165)); // no
console.log(nextSqaure(400)); // 441

// n = x제곱;
// x = Math.sqrt(n);
// x제곱 = (Math.sqrt(n))제곱
// n = (Math.sqrt(n))제곱
// 그러나 165가 이상하게 나온다...!!