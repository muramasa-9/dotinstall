'use strict';

{
  class Panel {
    // パネルの形を生成
    constructor() {
      // constructorでしか使わないからconst
      const section = document.createElement('section');
      section.classList.add('panel');

      // 他のメソッドから呼び出したいのでthis
      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.classList.add('stop', 'inactive');
      this.stop.textContent = 'STOP';
      this.stop.addEventListener('click', () => {
        // inactiveになっていれば処理終了
        if (this.stop.classList.contains('inactive')) {
          return;
        }
        this.stop.classList.add('inactive');

        clearTimeout(this.timeoutId);

        panelsLeft--; // クリックするたび-1

        if (panelsLeft === 0) {
          // spinボタンを押せるようにする
          spin.classList.remove('inactive');
          panelsLeft = 3;

          checkResult(); // class の外で書く
        }
      })

      // sectionに追加
      section.appendChild(this.img);
      section.appendChild(this.stop);

      // mainの作成
      const main = document.querySelector('main');
      main.appendChild(section);
    }

    getRandomImage() {
      const images = [
        'img/seven.png',
        'img/bell.png',
        'img/cherry.png',
      ];
      return images[Math.floor(Math.random() * images.length)];
    }


    // スロット画像の回転
    spin() {
      // 画像をgetRandomImage()メソッドで選ぶ
      this.img.src = this.getRandomImage();
      // 処理の繰り返し
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }


    // 各パネルが同じか判定
    isUnmatched(p1, p2) {
      // この画像のソースが他の画像ソースと異なっている場合
      // if (this.img.src !== p1.img.src && this.img.src !== p2.img.src) {
      //   return true;
      // } else {
      //   return false;
      // }
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }


    // panelが異なる時に薄く表示
    unmatched() {
      this.img.classList.add('unmatched');
      // cssで薄くする
    }


    // 処理をいくつか外すメソッド
    activate() {
      this.img.classList.remove('unmatched');
      this.stop.classList.remove('inactive');
    }

  }


  // 個々のパネルの処理ではないのでclass外
  // 各panelを比較する
  function checkResult() {
    if (panels[0].isUnmatched(panels[1], panels[2])) {
      panels[0].unmatched();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])) {
      panels[1].unmatched();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])) {
      panels[2].unmatched();
    }
  }


  // インスタンスを生成してhtmlに追加
  const panels = [
    new Panel(),
    new Panel(),
    new Panel(),
  ];

  // 動いているパネルの残りの数
  let panelsLeft = 3;


  // spinの動作を追加
  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    // spinを連打できなくする
    if (spin.classList.contains('inactive')) {
      return;
    }
    spin.classList.add('inactive');
    panels.forEach(panel =>{
      // spinをinactiveにした時にstop処理のいくつか外すメソッド
      panel.activate();
      panel.spin();
    });
  });

}