'use strict';


{
  class Post { // 親クラス
    constructor(text) {
      this.text = text;
      this.likeCount = 0;
    }

    show() {
      console.log(`${this.text} - ${this.likeCount} likes`);
    }

    like() {
      this.likeCount++;
      this.show();
    }
  }

  class SponsoredPost extends Post { // extends 親クラス名で内容を引き継ぐ
    constructor(text, sponsor) {
      super(text); // 小クラスでthisを使うために必要
      this.sponsor = sponsor;
    }

    show() {
      super.show(); // 親クラスのshow()を引き継ぐ
      console.log(`...sponsored by ${this.sponsor}`);
    }

    // like()はそのまま引き継ぐ

  }

  const posts = [
    new Post('JavaScriptの勉強中。。。。'),
    new Post('プログラミングの勉強中。。。。'),
    new SponsoredPost('3分動画でマスターしよう', 'dotinstall'),
  ];

  posts[2].show();
  posts[2].like();
}