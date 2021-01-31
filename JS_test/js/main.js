'use strict';


{
  function update() {
    // document.getElementById('target').textContent = 'Changed!';
    // document.querySelector('p').textContent = 'Changed!';
    document.querySelectorAll('p')[2].textContent = 'Changed!';
    // document.querySelectorAll('p').forEach((p, index) => {
    //   p.textContent = `${index}番目のpです！`;
    // });
  }

  setTimeout(update, 1000);



}