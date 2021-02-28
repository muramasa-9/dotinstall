'use strict';

(() => {
  // 範囲を決めたランダムな数字の生成
  function rand(min, max) {
    return Math.random() * (max - min) + min;
  }


  // ballの描写
  class Ball {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.x = rand(30, 250);
      this.y = 30;
      this.r = 10;
      this.vx = rand(3, 5) * (Math.random() < 0.5 ? 1 : -1);
      this.vy = rand(3, 5);
      this.isMissed = false;
    }

    gameMissedStatus() {
      return this.isMissed;
    }

    bounce() {
      this.vy *= -1;
    }

    reposition(paddleTop) {
      this.y = paddleTop - this.r;
    }

    getX() {
      return this.x;
    }

    getY() {
      return this.y;
    }

    getR() {
      return this.r;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // 下を超えた時ミス処理
      if (this.y - this.r > this.canvas.height) {
        this.isMissed = true;
      }

      // 壁にあたった時の処理
      if (
        this.x - this.r < 0 ||
        this.x + this.r > this.canvas.width
      ) {
        this.vx *= -1;
      }

      if (
        this.y - this.r < 0
      ) {
        this.vy *= -1;
      }
    }

    draw() {
      this.ctx.beginPath();
      this.ctx.fillStyle = '#fdfdfd';
      this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
      this.ctx.fill();
    }
  }


  class Paddle {
    constructor(canvas, game) {
      this.canvas = canvas;
      this.game = game;
      this.ctx = this.canvas.getContext('2d');
      // paddleのサイズ
      this.w = 60;
      this.h = 16;
      // paddle左上の座標
      this.x = this.canvas.width / 2 - (this.w / 2);
      this.y = this.canvas.height - 32;
      // paddleの初期位置
      this.mouseX = this.x;
      // paddleをマウスで動かす
      this.addHandler();
    }

    addHandler() {
      document.addEventListener('mousemove', e => {
        this.mouseX = e.clientX;
      });
    }

    update(ball) {
      const ballBottom = ball.getY() + ball.getR();
      const ballTop = ball.getY() - ball.getR();
      const ballCenter = ball.getX();
      const paddleTop = this.y;
      const paddleBottom = this.y + this.h;
      const paddleLeft = this.x;
      const paddleRight = this.x + this.w;


      if (
        ballBottom > paddleTop &&
        ballTop < paddleBottom &&
        ballCenter > paddleLeft &&
        ballCenter < paddleRight
      ) {
        ball.bounce();
        ball.reposition(paddleTop);
        this.game.addScore();
      }

      // getBoundingClientRect()でcanvasの位置を取得
      const rect = this.canvas.getBoundingClientRect();
      // paddleの中央位置を調整
      this.x = this.mouseX - rect.left - (this.w / 2);
      // canvasからはみ出ないようにする
      if (this.x < 0) {
        this.x = 0;
      }
      if (this.x + this.w > this.canvas.width) {
        this.x = this.canvas.width - this.w;
      }
    }

    draw() {
      this.ctx.fillStyle = '#fdfdfd';
      this.ctx.fillRect(this.x, this.y, this.w, this.h);

    }
  }


  class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.ball = new Ball(this.canvas);
      this.paddle = new Paddle(this.canvas,this);
      this.loop();
      this.isGameOver = false;
      this.score = 0;
    }

    addScore() {
      this.score ++;
    }

    loop() {
      if (this.isGameOver) {
        return;
      }

      this.update();
      this.draw();

      requestAnimationFrame(() => {
        this.loop();
      });
    }

    update() {
      this.ball.update();
      this.paddle.update(this.ball);

      if (this.ball.gameMissedStatus()) {
        this.isGameOver = true;
      }
    }

    draw() {
      if (this.isGameOver) {
        this.drawGameOver();
        return;
      }

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ball.draw();
      this.paddle.draw();
      this.drawScore();
    }

    drawGameOver() {
      this.ctx.font = '28px "Arial Black"';
      this.ctx.fillStyle = 'tomato';
      this.ctx.fillText('GAME OVER!', 50, 150);
    }

    drawScore() {
      this.ctx.font = '20px Arial';
      this.ctx.fillStyle = '#fdfdfd';
      this.ctx.fillText(this.score, 10, 25);
    }
  }


  const canvas = document.querySelector('canvas');
  if (typeof canvas.getContext === 'undefined') {
    return;
  }

  new Game(canvas);
})();



