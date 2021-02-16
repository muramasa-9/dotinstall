'use strict';

// 即時関数 => 宣言と同時に実行できる関数
(() => {

  class ClockDrawer {
    constructor(canvas) {
      this.ctx = canvas.getContext('2d');
      this.width = canvas.width;
      this.height = canvas.height;
    }

    draw(angle, func) {
      this.ctx.save();

      this.ctx.translate(this.width / 2, this.height / 2);
      // ctx.rotate(2 * Math.PI / 360 * angle);
      this.ctx.rotate(Math.PI / 180 * angle);

      // メモリを書く
      this.ctx.beginPath();
      func(this.ctx);
      this.ctx.stroke();

      this.ctx.restore();
    }

    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  }

  class Clock {
    constructor(drawer) {
      this.r = 100;
      this.drawer = drawer;
    }

    drawFace() {
      for (let angle = 0; angle < 360; angle += 6) {
        this.drawer.draw(angle, ctx => {
          ctx.moveTo(0, -this.r);
          if (angle % 30 === 0) {
            ctx.lineWidth = 2;
            ctx.lineTo(0, -this.r + 10);
            // 数字を書く
            ctx.font = '13px, Arial';
            ctx.textAlign = 'center';
            // JSでは0はfalseと認識 => falseの時は12と表示 => '|| 12'
            ctx.fillText(angle / 30 || 12, 0, -this.r + 25);
          } else {
            ctx.lineTo(0, -this.r + 5);
          }
        });
      }
    }

    drawHands() {
      // hours
      this.drawer.draw(this.h * 30 + this.m * 0.5, ctx => {
        ctx.lineWidth = 6;
        ctx.moveTo(0, 10);
        ctx.lineTo(0, -this.r + 50);
        ctx.stroke();
      });

      // minutes
      this.drawer.draw(this.m * 6, ctx => {
        ctx.lineWidth = 4;
        ctx.moveTo(0, 20);
        ctx.lineTo(0, -this.r + 30);
        ctx.stroke();
      });

      // second
      this.drawer.draw(this.s * 6, ctx => {
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'red';
        ctx.moveTo(0, 20);
        ctx.lineTo(0, -this.r);
        ctx.stroke();
      });
    }

    update() {
      this.h = (new Date()).getHours();
      this.m = (new Date()).getMinutes();
      this.s = (new Date()).getSeconds();
    }

    run() {
      // 現在時刻に更新
      this.update();

      // 描画をクリア
      this.drawer.clear();

      this.drawFace();
      this.drawHands();

      setTimeout(() => {
        this.run();
      // 100ミリ秒後に実施
      }, 100);
    }
  }

  const canvas = document.querySelector('canvas');
  // ブラウザがcanvasに対応していない時は処理を止める
  if (typeof canvas.getContext === 'undefined') {
    return;
  }


  const clock = new Clock(new ClockDrawer(canvas));
  clock.run();

})();