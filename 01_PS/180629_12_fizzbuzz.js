// 3의 배수일때는 fizz, 5의 배수 일때는 buzz, 15의 배수일때는 fizzbuzz를 출력하는 함수를 만들어라

function fizzBuzz(n) {
  var arr = [];

  for (i=1; i<=n; i++){
    arr.push(i);
  }

  return arr.map(item => {
    if (item % 15 === 0) {
      return 'fizzbuzz';
    } else if (item % 3 === 0) {
      return 'fizz';
    } else if (item % 5 === 0) {
      return 'buzz';
    } else {
      return item;
    }
  })
}

console.log(fizzBuzz(24));