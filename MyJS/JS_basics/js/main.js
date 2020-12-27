'use strict';


{
  const numbers = [1, 4, 7, 8, 10];
// 偶数の要素だけの配列作成①
  // const evenNumbers = numbers.filter((number) => {
  //     if ( number % 2 === 0) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  // });
// 偶数の要素だけの配列作成①
  const evenNumbers = numbers.filter(number => number % 2 === 0);
  console.log(evenNumbers);
}