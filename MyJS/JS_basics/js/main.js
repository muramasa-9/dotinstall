'use strict';


{

// 【】でオブジェクトのプロパティを列挙
  const point = { // {} で囲む
    x: 100, // ,で区切る
    y: 180,
  };

  const points = [
    {x: 30, y: 20},
    {x: 10, y: 50},
    {x: 40, y: 40},
  ]
  console.log(points[1].y); // 2番目のyの値を表示
}