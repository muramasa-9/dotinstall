'use strict';

{
  const question = document.getElementById('question');
  const choices = document.getElementById('choices');
  const btn = document.getElementById('btn');
  const result = document.getElementById('result');
  const scoreLabel = document.querySelector('#result > p');

  const quizSet = shuffle([
    {q: '洗面所を破壊できるのは?', c: ['愛子', '智成', 'ちょま']},
    {q: '一番おならをするのは?', c: ['智成', '愛子', 'ちょま']},
    {q: '将来移住したい場所は?', c: ['ハワイ', '北京', '南極']},
  ]);

  let currentNum = 0; // 何問目かを変数に指定
  let isAnswered;
  let score = 0; // 正解数をカウント


  // シャッフルする関数
  function shuffle(arr) {
    // ランダムに選ぶ配列の最後をiとする
    // 最後の配列のインデックスをi
    for (let i = arr.length -1; i > 0; i--) {
      // ランダムに取り出すインデックスj
      const j = Math.floor(Math.random() * (i + 1));
      // iとjを入れ替え
      [arr[j], arr[i]] = [arr[i], arr[j]]
    }
    return arr;
  }


  function checkAnswer(li) {
    if (isAnswered) {
      return;
    }
    isAnswered = true;

    if (li.textContent === quizSet[currentNum].c[0]) {
      li.classList.add('correct');
      score++;
    } else {
      li.classList.add('wrong');
    }

    // classList.remove()でクラス削除
    btn.classList.remove('disabled');
  }


  function setQuiz() {
    isAnswered = false;
    // 問題文をリストから代入
    question.textContent = quizSet[currentNum].q;

    // 最初に選択肢をクリア
    while(choices.firstChild) {
      // firstChildの値がnullになるまでループ
      choices.removeChild(choices.firstChild);
    }

    // 選択肢をシャッフル
    //  [...リスト] にしてコピーを代入。原本リストの配列はそのまま。
    const shuffledChoices = shuffle([...quizSet[currentNum].c]);
    // 選択肢をforEachで一つずつ代入
    shuffledChoices.forEach(choice => {
      const li = document.createElement('li');
      li.textContent = choice;
      li.addEventListener('click', () => {
        checkAnswer(li);
      });
      choices.appendChild(li);
    });

    if (currentNum === quizSet.length - 1) { //最終問題だった時
      btn.textContent = 'Show Score';
    }
  }


  setQuiz();

  btn.addEventListener('click', () => {
    // disabledの時は無効化
    // classList.contains()で特定のクラスがあるのか確認できる
    if (btn.classList.contains('disabled')) {
      return;
    }

    // btnをクリックして次の問題に行く時はグレーに戻す
    btn.classList.add('disabled');

    // 最後の結果を表示
    if (currentNum === quizSet.length - 1) { //最終問題だったら
      // console.log(`Score : ${score} / ${quizSet.length}`);
      scoreLabel.textContent = `Score : ${score} / ${quizSet.length}`;
      result.classList.remove('hidden');
    } else {
      currentNum++;
      setQuiz();
    }
  });
}