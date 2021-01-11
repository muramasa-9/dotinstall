'use scrict';

{
  const timer = document.getElementById('timer');
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');

  let startTime; // ブロックの外でも使うのでここで宣言
  let timeoutId;
  let elapsedTime = 0;


  function countUp() { //時間測定の定義を作成
    const d = new Date(Date.now() - startTime + elapsedTime); // 今の時間からスタート時間を引く
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2,'0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');
    timer.textContent = `${m}:${s}.${ms}`;

    timeoutId = setTimeout(() => { // 10ミリ秒ごとにcountUp()自身を呼び出す
      countUp();
    }, 10);
    // => 10ミリ秒ごとにこの処理が走って現在時刻とスタート時刻の差を表示する
  }


  function setBttonStartInitial() { //初期のボタン表示
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
  }
  function setBttonStartRunning() { //カウント中のボタン表示
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
  }
  function setBttonStartStopped() { //ストップ時のボタン表示
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
  }


  setBttonStartInitial(); // 初期のボタン表示

  start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
      return;
    }
    setBttonStartRunning(); // startを押した時のボタン状況
    startTime = Date.now(); // 現在の時刻を取得
    countUp();
  });

  stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
      return;
    }
    setBttonStartStopped(); // stopを押した時のボタン状況
    clearTimeout(timeoutId);
    elapsedTime += Date.now() - startTime;
  })

  reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
      return;
    }
    setBttonStartInitial(); // resetを押した時のボタン状況
    timer.textContent = '00:00.000';
    elapsedTime = 0;
  })





}