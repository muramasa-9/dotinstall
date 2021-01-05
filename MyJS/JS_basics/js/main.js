'use strict';


{
  const text = document.querySelector('textarea');
  // inputは内容が更新された時
  text.addEventListener('input', () => {
    console.log('input!');
    console.log(text.value.length); // 文字数を取得
  });

  // changeは内容更新が確定した時
  text.addEventListener('change', () => {
    console.log('change!');
  });
}