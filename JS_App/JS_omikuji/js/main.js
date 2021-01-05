'use srtict';

{
  const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
      // const results = ['大吉', '中吉', '小吉', '吉', '凶', '大凶']

      // const n = Math.floor(Math.random() * results.length); // ランダムに0-5の数字を選ぶ
      // btn.textContent = results[n];

      // 上の２行を１業で書く
      // btn.textContent = results[Math.floor(Math.random() * results.length)];


      // 表示の確率を変える
      const n = Math.random();
      if (n < 0.05) {
        btn.textContent = '大吉';
      } else if (n < 0.2) {
        btn.textContent = '中吉'
      } else if (n < 0.5) {
        btn.textContent = '小吉';
      } else if (n <0.8) {
        btn.textContent = '吉';
      } else if (n <0.9) {
        btn.textContent = '凶';
      } else {
        btn.textContent = '大凶';
      }






    // btn.textContent = n; // ランダムに選んだ数字を挿入


    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉！';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉！';
    //     break;
    //   case 2:
    //     btn.textContent = '小吉！';
    //     break;
    //   case 3:
    //     btn.textContent = '吉！';
    //     break;
    //   case 4:
    //     btn.textContent = '凶！';
    //     break;
    //   case 5:
    //     btn.textContent = '大凶！';
    //     break;

  });




}