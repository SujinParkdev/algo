// #10. Check Palindrom
// palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 
// 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 
// 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 
// Boolean값을 반환하는 함수를 완성하라. 
// 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

function checkPalindrom(str) {
if (1<=str.length) {
  var arr1 = str.split('');
  var arr2 = arr1.slice();
  var arrBack = arr2.reverse();
  for (i=0; i<arr.length; i++){
    if(arr1[i]===arrBack[i]){
      return true;
    } else {
      return false;
    }
  }
} else {
  return false;
}
}

// 강사님 코드
// function checkPalindrom(str){
//   return str.split.('').reverse().join(,);
// }

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); //true


// var str = 'dad';
// var arr1 = str.split('');
// var arr2 = arr1.slice();
// var arrBack = arr2.reverse();
// (arr1===arrBack) ? true : false;
// 왜 false가 나올까? 찍어보면
// arr1 = ["d", "a", "d"], arrBack = ["d", "a", "d"];인데.
// 비교할 때 데이터타입에 따라 다르게 비교한다. 
// 어레이는 레퍼런스타입 변수이기 때문에 참조값까지 비교하나, 문자열은 값과 타입만 비교(===사용할때).