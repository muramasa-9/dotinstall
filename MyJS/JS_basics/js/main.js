'use strict';


{

  document.querySelector('button').addEventListener('click', () => {
    document.getElementById('target').textContent = 'Changed!';
  });


  // setTimeout(update, 1000); // 1秒後にh1を変更
}