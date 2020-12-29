'use strict';


{
  // 時間になったら処理を実行③
  let i = 0; // カウンター用の変数
  function showTime() {
    console.log(new Date());
    const timeoutId = setTimeout(showTime, 2000); // 2秒後に上の処理を実行
    i++;
    if (i > 2) { // 3回で繰り返しを停止
      clearTimeout(timeoutId);
    }
  }
  showTime(); // 上の処理を呼び出し => 2秒後に繰り返し処理になる
}