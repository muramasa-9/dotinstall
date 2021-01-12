'use strict';

{

  // 単語をセットする関数
  function setWord() {
    // 単語をランダムに取り出す
    // .splice()で重複回避、配列になるので[0]が必要
    word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
    target.textContent = word;
    loc = 0; // 単語セット時に数字リセット
  }

  const words = [ // 単語のリスト
    'red',
    'blue',
    'yellow',
    'pink',
    'black'
  ];

  let word; // 取り出す単語
  let loc = 0; // 入力した文字数
  let startTime;
  let isPlaying = false;
  const target = document.getElementById('target');

  document.addEventListener('click', () => {
    if (isPlaying === true) {
      return; // プレイ中はここで処理中止
    }
    isPlaying = true;
    startTime = Date.now(); // スタート時の時間ゲット
    setWord();
  });

  document.addEventListener('keydown', e => {
    if (e.key !== word[loc]) { // 打った文字が間違いの時
      return; // 個々で終了、以下には進まない
    }
    // 上記があるので下の１文不要
    // if (e.key === word[loc]) { //打った文字がe.key wordのloc番目の時
    loc++;

    // '文字'をlocの数だけつなげる + loc番目以降の文字を取り出す
    target.textContent = '_'.repeat(loc) + word.substring(loc);

    // 単語を打ち終わりの処理
    if (loc === word.length) {
      if (words.length === 0) {
         // ミリ秒を秒にする .toFixed(2)で小数点２桁まで
        const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
        const result = document.getElementById('result');
        result.textContent = `Finished! ${elapsedTime} seconds!`;
        return;
      }


      setWord(); // 次の単語を表示
    }

  });





}