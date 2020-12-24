// htmlに書くとき
// <script></script>で囲む ↓以下記入内容
  'use scrict'; // エラーが発見しやすい
// documentは書類全般、getElementById('')でID指定
// ddEventListener('動作', () => {実行内容}は動作したら実行内容のイベントを追加してという指示
  document.getElementById('target').addEventListener('click', () => {
    document.getElementById('target').style.background = 'pink';
    document.getElementById('target').style.borderRadius = '50%';

// もしくはcssのstyleでクラスを指定して書くこともできる
// クラスの指定方法がこれ
    document.getElementById('target').classList.add('circle');

// 【toggle】は'taget'に’circle’クラスがなければつける、あれば外す
    document.getElementById('target').classList.toggle('circle');
  });




// 定数を使っても書ける
//【const 定数名 = 値;】
const target = document.getElementById("target");

target.addEventListener("click", () => {
  target.classList.toggle("circle");
});




// js内で【div】を追加する
const div = document.createElement('div');
div.classList.add('box');

div.addEventListener('click', () => {
  div.classList.toggle('circle');
});
// 作ったdivをbodyの子要素として追加する
document.body.appendChild(div);




// 【for】文①で繰り返し
for (let i = 0; i < 10; i++) { // iは0スタート、10までiに1ずつ足していく
  const div = document.createElement("div");
  div.classList.add("box");
  div.textContent = i; // divに数字iを表示させる

  div.addEventListener("click", () => {
    div.classList.toggle("circle");
  });

  document.body.appendChild(div);
}




// 別ファイルから呼び出す
<scrip src="js/main.js"></scrip>




// 文字の記載方法 option + ¥ でバックスラッシュ
console.log('it\'s me!'); // バックスラッシュで'を表示
console.log("it's me!"); // ””で囲むとOK
// \n=改行 \t=タブ
console.log('hello' + 'world'); // 文字を足すこともできる




// 定数の書き方【const 定数名 = 値;】
const price = 150;
console.log(price * 140);
console.log(price * 160);

price = 170; // エラー。定数は再代入はできない
console.log(price * 140);

// 変数の書き方【let 定数名 = 値;】
let price = 150;
console.log(price * 140);
console.log(price * 160);

price = 170; // OK。変数は再代入できる！
console.log(price * 140);

price += 100; // priceに100を足す
price *= 2 // priceかける２
price += 1; // pricc +1
price++; // pricc +1
price--; // pricc -1

// 【定数・変数】の名前のルール
// 大文字と小文字は区別する
// 数値からはじめられない
// 使える記号【 $ _  】のみ




// データ型の種類
console.log(typeof 'hello'); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object




// 数字の文字列に注意
console.log('5' * 3); // 関係なく計算できる
console.log('5' - '3'); // 関係なく計算できる

console.log('5' + 3); // ＋の時だけ文字の表記【53】
// parseInt('5', 10)で10進数に変換すると計算できる
console.log(parseInt('5', 10) + 3);

// 文字列を10進数にするとconsoleで【NaN】のエラー
parseInt('Hello', 10)




// 比較演算子
const price = 1200;
console.log(price < 1000);
console.log(price > 1000);
console.log(price <= 1000);
console.log(price >= 1000);
console.log(price === 1000); // 等しい
console.log(price !== 1000); // 等しくない

// true,falseは【Boolean()】で判定
console.log(Boolean(0)); // false
console.log(Boolean('hello')); // true
console.log(Boolean(5)); // true

// false <- 0, null, undefined, ''のみ, false
// true <- 上記以外




// 【if】条件分岐
const score = 85;
if (score >= 80) { // 条件１
  console.log('Great!');
} else if (score >= 60) { // 条件２
  console.log('OK.....')
} else {
  console.log('Booo....')
}

// 別の書き方【条件式 ? trueの処理 : falseの処理】
const score = 85;
score >= 80 ? console.log('Great!') : console.log('OK.....')




// 【論理演算子】
// && なおかつ (AND)
// || もしくは (OR)
// ! 〜ではない (NOT)
if (score >= 50 && name === 'koga') {
  console.log('Good job!');
}




// 【switch】で簡単に書く
const signal = 'red';
// signalが多いif文
if (signal === 'red') {
  console.log('Stop!');
} else if (signal === 'yellow') {
  console.log('Caution!');
} else if (signal === 'Blue') {
  console.log ('Go!');
}

switch (signal) { // switch (共通名) => caseで条件分岐 breakで閉める
  case 'red':
    console.log('Stop!');
    break;

  case 'yellow':
    console.log('Caution!');
    break;

  case 'blue':
  case 'green': // Blue か Green の時は case で追記
    console.log('Go!');
    break;

  default: // 上記以外は default で表記
    console.log('Wrong signal!');
    break;
}




// 【for】文②
for (let i = 1; i <= 10; i++) { // let で値を再代入
  if (i === 4) {
    continue; // 条件を満たすとスキップ
  }

  if (i === 8) {
    break; // 条件を満たすと終了
  }

  console.log('hello'); // hello 10回
  console.log('hello' + i); // hello1,hello2,,,,,
  // バッククオートで囲み${}で文字列に計算式などを埋め込む
  console.log(`hello ${i}`);
}




// while文
let hp = 100;
while (hp > 0) {
  console.log(`${hp} HP left!`);
  hp -= 15; // 無限ループに注意
}

 // do - while文
let hp = -50;
do {
  console.log(`${hp} HP left!`);
  hp -= 15;
} while (hp > 0) // 条件の評価は処理の後なので必ず一度はhpを表




// 関数で処理をまとめる
function showad(message = 'ad') { // function 関数名(仮引数) で指定
  // showad(引数名 = '指定名')の引数の記載がないと'ad'と表示する
  console.log('----------------');
  console.log(`-------${message}---------`); // バッククオーツと＄｛｝で引数引用
  console.log('----------------');
}

showad('header ad'); // 関数の呼び出し(実引数) 【;】を忘れないよう注意
console.log('Tom is great!');
console.log('Bob is great!');
showad('ad');
console.log('Steve is great!');
console.log('Richard is great!');
showad('footer ad');




 // 【return】で値をかえす
 function sum(a, b, c) { // 関数を指定
  return a + b + c; // 関数の値でかえす
  console.log(a + b + c); // returnの後の処理は実行されない
}

// 関数式の書き方
// const 関数名 = function(仮引数) {処理};
const sum = function(a, b, c) { // 関数を指定
  return a + b + c; // 関数の値でかえす
};

const total = sum(1,2,3) + sum(4,5,6); // 値＋値の式になる
console.log(total);




// アロー関数
const sum = (a, b, c) => { // function不要、=> 以降に処理を書く
  return a + b + c;
};

const sum = (a, b, c) => a + b + c; // returnで返すだけ

const double = a => a * 2; // 引数が一つの時は（）省略可