'use strict';

{
  const images = [
    'img/pic00.png',
    'img/pic01.png',
    'img/pic02.png',
    'img/pic03.png',
    'img/pic04.png',
    'img/pic05.png',
    'img/pic06.png',
    'img/pic07.png',
  ];
  // 何番目の画像かをカウント
  let currentIndex = 0;

  // mainの画像を選択
  const mainImage = document.getElementById('main');
  mainImage.src = images[currentIndex];

  images.forEach((image, index) => {
    const img = document.createElement('img');
    img.src = image;

    const li = document.createElement('li');
    if (index === currentIndex) {
      li.classList.add('current')
    }

    // サムネイルをクリックするとメインに表示
    li.addEventListener('click', () => {
      mainImage.src = image;
      // サムネイルの一覧を取得
      const thumbnails = document.querySelectorAll('.thumbnails > li');
      // 今'current'クラスがついている画像から'current'を取り除く
      thumbnails[currentIndex].classList.remove('current');
      // 'current'を更新
      currentIndex = index;
      thumbnails[currentIndex].classList.add('current');
    });

    li.appendChild(img);
    document.querySelector('.thumbnails').appendChild(li)

  });


  // Nextボタン
  const next = document.getElementById('next');
  next.addEventListener('click', () => {
    // +1で次のサムネイル
    let target = currentIndex + 1;
    // 画像の数と同じになったらカウント0にする
    if (target === images.length) {
      target = 0;
    }
    // サムネイル一覧の'target'番目をクリック
    document.querySelectorAll('.thumbnails > li')[target].click();
  });


  // Prevボタン
  const prev = document.getElementById('prev');
  prev.addEventListener('click', () => {
    // -1で前のサムネイル
    let target = currentIndex - 1;
    // 画像の数と同じになったらカウント0にする
    if (target < 0) {
      target = images.length - 1;
    }
    // サムネイル一覧の'target'番目をクリック
    document.querySelectorAll('.thumbnails > li')[target].click();
  });

  // setTimeoutの返り値が必要
  let timeoutId;

  // スライドショーの関数
  function playSlideshow() {
    timeoutId = setTimeout(() => {
      next.click();
      playSlideshow();
    }, 1000); // 1秒後
  }

  // Playを押した時
  let isPlaying = false;


  // Playボタン
  const play = document.getElementById('play');
  play.addEventListener('click', () => {
    if (isPlaying === false) {
      playSlideshow();
      play.textContent = 'Pause';
    } else {
      clearTimeout(timeoutId);
      play.textContent = 'Play';
    }
    // isPlayingのfalseとtrueを反転
    isPlaying = !isPlaying;
  });
}