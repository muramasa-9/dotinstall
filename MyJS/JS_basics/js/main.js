'use strict';


{

  document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target'); // 同じ表記を定数化
    // targetNode.textContent = 'Changed!';

    // 特定のクラスがあれば外す処理①
    // if (targetNode.classList.contains('my-color') === true) {
      //   targetNode.classList.remove('my-color'); // classList.remove()でクラス削除
      // } else {
        //   targetNode.classList.add('my-color'); // なければ追加
        // }

    // 特定のクラスがあれば外す処理②
    targetNode.classList.toggle('my-color');




  });

}