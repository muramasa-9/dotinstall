'use strict';

// returnを使うために即時関数
(() => {
  class IconDrawer {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
      this.r = 60;
    }

    draw(angle) {
      // 書いたものは消えないので白で塗りつぶす
      // 30%ぐらいの白
      this.ctx.fillStyle = 'rgba(255, 255, 255, .3)';
      this.ctx.fillRect(0, 0, this.width, this.height);


      this.ctx.save();

      // 座標の基準の円の中心に移動する
      this.ctx.translate(this.width / 2, this.height / 2);

      // 回転させる 回転する角度はラジアンに変換
      this.ctx.rotate(Math.PI / 180 * angle);

      // 円を書く
      // this.ctx.beginPath();
      // // this.ctx.arc(this.width / 2, this.height / 2, this.r, 0, 2 * Math.PI);
      // this.ctx.arc(0, 0, this.r, 0, 2 * Math.PI);
      // this.ctx.stroke();

      // 回る線を描く
      this.ctx.beginPath();
      // this.ctx.moveTo(this.width / 2, this.height / 2 - this.r - 5);
      // this.ctx.lineTo(this.width / 2, this.height / 2 - this.r + 5);
      this.ctx.moveTo(0, -this.r - 5);
      this.ctx.lineTo(0, -this.r + 5);
      this.ctx.strokeStyle = 'orange';
      this.ctx.lineWidth = 6;
      this.ctx.stroke();

      this.ctx.restore();
    }
  }


  class Icon {
    constructor(drawer) {
      this.drawer = drawer;
      this.angle = 0;
    }

    draw() {
      this.drawer.draw(this.angle);
    }

    update() {
      // 12度ずつ増やす
      this.angle += 12;
    }

    run() {
      this.update();
      this.draw();
      // 100ミリ秒ごとにrun()を繰り替えし実行
      setTimeout(() => {
        this.run();
      }, 100);
    }
  }


  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined'){
    return;
  }

  const icon = new Icon(new IconDrawer(canvas));
  icon.run();
})();

