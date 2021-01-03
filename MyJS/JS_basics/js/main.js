'use strict';


{

  document.querySelector('button').addEventListener('click', () => {
    const item0 = document.querySelectorAll('li')[0]; // リストの０番目を呼び出し
    const copy = item0.cloneNode(true); // .cloneNode(true)で要素までコピー (false)だと空の要素作成

    const ul = document.querySelector('ul'); // 親要素呼び出し
    const item2 = document.querySelectorAll('li')[2]; // 挿入したい部分の後ろの要素を呼び出し
    ul.insertBefore(copy, item2); // .insertBefore(入れたい要素, 後ろの要素)
  });

}