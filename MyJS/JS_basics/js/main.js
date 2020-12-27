'use strict';


{
  // オブジェクトの作成
  const point = { // {} で囲む
    x: 100, // ,で区切る
    y: 180,
  };
  point.x = 200; // オブジェクト名.キー
  point['y'] = 200;

  point.z = 120; // 新たなオブジェクト名.キー

// プロパティ（値）の削除
  delete point.y
// プロパティ（値）の呼び出し
  console.log(point.x); // オブジェクト名.キー
  console.log(point['y']); // オブジェクト[キー]
  console.log(point['z']); // オブジェクト[キー]
}