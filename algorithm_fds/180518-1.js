// findKim 함수(메소드)는 String형 배열 seoul을 매개변수로 받습니다.
// seoul의 element중 Kim의 위치 x를 찾아, 'Kim은 x 번째 있다.'는 String을 반환하세요.
//seoul에 Kim은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

function findKim(seoul){
  var index = 0;
  //함수를 완성하세요
  if (seoul == 'Kim'){
    return index = seoul[];
  }
  return "Kim " + index + "번 째 있다.";
}

// 실행을 위한 테스트코드입니다.
console.log(findKim(["Lee", "Park", "Kim"]));

// 출력 예시
// Kim 2번 째 있다.
