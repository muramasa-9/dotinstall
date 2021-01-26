'use strict';

{

  const menuItems = document.querySelectorAll('.menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      // aの遷移を中止
      e.preventDefault();

      // 全てのアクティブクラスを外す
      menuItems.forEach(item => {
        item.classList.remove('active');
      })
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });

      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });

}