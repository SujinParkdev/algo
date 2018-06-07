// 3. 문자열 다루기
// alphaString46 함수는 문자열 s를 매개변수로 입력받는다. 
// s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라. 
// 예를들어 s가 'a234'이면 false를 리턴하고 '1234'라면 true를 리턴한다

function alphaString46(s) {
  return ( !(s===undefined) && 4 <= s.length && s.length <= 6 && !isNaN(s) ) ? true : false;
   };

console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false

// TypeError : Cannot read property 'length' of undefined
// => s.length에서 에러가 난 것.
// 왜? 아무 값도 안 넣어줬기 때문에.
// 그렇다면 s가 undefind이면 false를 반환하도록 해야 함