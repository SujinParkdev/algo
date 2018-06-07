
// 8. 수박수박수박수박수박수?
// waterMelon 함수는 정수 n을 매개변수로 입력받는다. 
// 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 
// 함수를 완성하라.

// 예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴한다.

function waterMelon(n){
  var num = Math.floor(n/2);
  if (n%2===0) {
    var sb = '수박';
    for (i=0; i<num-1; i++){
      sb = sb + sb;
    };
    return sb;
  } else {
    var bs = '박수';
    for (i=0; i<num; i++){
      bs = '수' + bs;
    };
    return bs;
  }
};

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(8));