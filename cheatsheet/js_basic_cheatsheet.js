// basic------------------------------------------------------------------------------


// htmlに書くとき---------------------------------------
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




// 定数を使っても書ける---------------------------------------
//【const 定数名 = 値;】
const target = document.getElementById("target");

target.addEventListener("click", () => {
  target.classList.toggle("circle");
});




// js内で【div】を追加する---------------------------------------
const div = document.createElement('div');
div.classList.add('box');

div.addEventListener('click', () => {
  div.classList.toggle('circle');
});
// 作ったdivをbodyの子要素として追加する
document.body.appendChild(div);




// 【for】文①で繰り返し---------------------------------------
for (let i = 0; i < 10; i++) { // iは0スタート、10までiに1ずつ足していく
  const div = document.createElement("div");
  div.classList.add("box");
  div.textContent = i; // divに数字iを表示させる

  div.addEventListener("click", () => {
    div.classList.toggle("circle");
  });

  document.body.appendChild(div);
}




// 別ファイルから呼び出す---------------------------------------
<scrip src="js/main.js"></scrip>




// 文字の記載方法 option + ¥ でバックスラッシュ---------------------------------------
console.log('it\'s me!'); // バックスラッシュで'を表示
console.log("it's me!"); // ””で囲むとOK
// \n=改行 \t=タブ
console.log('hello' + 'world'); // 文字を足すこともできる




// 定数の書き方【const 定数名 = 値;】---------------------------------------
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




// データ型の種類---------------------------------------
console.log(typeof 'hello'); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // object




// 数字の文字列に注意---------------------------------------
console.log('5' * 3); // 関係なく計算できる
console.log('5' - '3'); // 関係なく計算できる

console.log('5' + 3); // ＋の時だけ文字の表記【53】
// parseInt('5', 10)で10進数に変換すると計算できる
console.log(parseInt('5', 10) + 3);

// 文字列を10進数にするとconsoleで【NaN】のエラー
parseInt('Hello', 10)




// 比較演算子---------------------------------------
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




// 【if】条件分岐---------------------------------------
const score = 85;
if (score >= 80) { // 条件１
  console.log('Great!');
} else if (score >= 60) { // 条件２
  console.log('OK.....')
} else {
  console.log('Booo....')
}

// 別の書き方【条件式 ? trueの処理 : falseの処理】---------------------------------------
const score = 85;
score >= 80 ? console.log('Great!') : console.log('OK.....')




// 【論理演算子】---------------------------------------
// && なおかつ (AND)
// || もしくは (OR)
// ! 〜ではない (NOT)
if (score >= 50 && name === 'koga') {
  console.log('Good job!');
}




// 【switch】で簡単に書く---------------------------------------
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




// 【for】文②---------------------------------------
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




// while文---------------------------------------
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




// 関数で処理をまとめる---------------------------------------
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




 // 【return】で値をかえす---------------------------------------
 function sum(a, b, c) { // 関数を指定
  return a + b + c; // 関数の値でかえす
  console.log(a + b + c); // returnの後の処理は実行されない
}

// 関数式の書き方---------------------------------------
// const 関数名 = function(仮引数) {処理};
const sum = function(a, b, c) { // 関数を指定
  return a + b + c; // 関数の値でかえす
};

const total = sum(1,2,3) + sum(4,5,6); // 値＋値の式になる
console.log(total);




// アロー関数---------------------------------------
const sum = (a, b, c) => { // function不要、=> 以降に処理を書く
  return a + b + c;
};

const sum = (a, b, c) => a + b + c; // returnで返すだけ

const double = a => a * 2; // 引数が一つの時は（）省略可




// スコープ 有効範囲---------------------------------------
const x = 2; // x は全体で有効

function f() {
  const x = 1; // x は関数内だけ有効
  console.log(x);
}

f(); // 1
console.log(x); // 2

// html 内で同じ内容を書くとエラー
// {} で囲って有効範囲を指定
// html 内の順番通りに表示（リンクurl、直書きなど）




// object------------------------------------------------------------------------------


// 複数の値を配列---------------------------------------
const scores = [80, 90, 60]; // 同じ定数の値は[,]で記載

console.log(scores[2]); // 個別の要素を表示

scores[2] = 44; // constの定数でも要素の代入はOK
scores = 13; // これは不可

console.log(scores.length); // 要素の数を表示


// 各要素の表示---------------------------------------
console.log(`Score : ${scores[0]}`);
console.log(`Score : ${scores[1]}`);
console.log(`Score : ${scores[2]}`);


// 【for】文で繰り返しを使って表示---------------------------------------
for (let i = 0; i < scores.length; i++) { // scores.lengthで要素の数より小さい
  console.log(`Score ${i} : ${scores[i]}`); // S{} でインデントも表示
}


// 【forEach()】で繰り返しをすっきり書く---------------------------------------
const scores = [80, 90, 40, 70];
// forEach(要素, インデント)を順番に取り出す
scores.forEach((score, index) => {
    console.log(`Score ${index}: ${score}`)
});


// 配列した要素の変更---------------------------------------
scores.unshift(55, 60); // unshift() 先頭に要素を追加
scores.push(55, 60); // push() 末尾に要素を追加
scores.shift(); // shift() 先頭の要素を削除 ()内は記載なし
scores.pop(); // pop() 末尾の要素を削除 ()内は記載なし
// 途中の要素の削除、追加
scores.splice(1,1,40,50); // splice(変化開始の位置, 削除数, 追加要素, ・・・・)


 // 配列に他の配列を追加 スプレッド構文---------------------------------------
const otherScores = [10,20];
const scores = [80, 90, 40, 70, ...otherScores]; // 【...配列名】で追加できる
function sum(s, v) {
  console.log(a + b);
}
sum(...otherScores); // 30


// 分割代入---------------------------------------
const scores = [80, 90, 40, 70];
const [a, b, c, d] = scores;
const [a, b, ...others]; // [80, 90,[40, 70]]の意味
// 値の交換
let x = 30;
let y = 70;
[x, y] = [y, x]; // xとyの値が交換
console.log(x); // 出力して確認


// 【map()】 で各要素を一律に変更---------------------------------------
const prices = [100, 190, 200];
// 価格を20円ずつ値上げする①
const updatedPrices = prices.map((price) => {
  return price + 20;
});
// 価格を20円ずつ値上げする②
// 引数１つなので()省略、return１行も{}省略
const updatedPrices = prices.map(price =>  price + 20);
console.log(updatedPrices);


// 【filter()】 で条件に合う要素を抽出して別の配列をつくる---------------------------------------
const numbers = [1, 4, 7, 8, 10];
// 偶数の要素だけの配列作成①
const evenNumbers = numbers.filter((number) => {
    if ( number % 2 === 0) {
      return true;
    } else {
      return false;
    }
});
// 偶数の要素だけの配列作成①
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);




// オブジェクトの作成---------------------------------------
const point = { // {} で囲む
  x: 100, // ,で区切る
  y: 180,
// ...オブジェクト名, とスプレッド構文を使って他のオブジェクト内容を追加できる
};

// プロパティ（値）の呼び出し
console.log(point.x); // オブジェクト名.キー
console.log(point['x']); // オブジェクト[キー]

// プロパティ（値）の変更
point.x = 200; // オブジェクト名.キー
point['x'] = 200; // オブジェクト[キー]

// プロパティ（値）の追加
point.z = 120; // 新たなオブジェクト名.キー

// プロパティ（値）の削除
delete point.y // delete + 削除するオブジェクト名.キー


// オブジェクトの分割代入
const otherProps = {
  r: 4,
  colore: 'red',
};

const point = { // {} で囲む
  x: 100, // ,で区切る
  y: 180,
  ...otherProps, // 上のオブジェクト内容を追加
};

const {x, y, ...others} = pont; // {x, y, {r,color}} の意味




// 【】でオブジェクトのプロパティを列挙---------------------------------------
const point = { // {} で囲む
x: 100, // ,で区切る
y: 180,
};

const keys = Object.keys(point);  // ①オブジェクトのすべてのキーを配列で取得
keys.forEach(key => { // 定数にはforEach()が使える
console.log(`key: ${key} Value: ${point[key]}`); // ${point[key]で値を表示



// 複数の値---------------------------------------
const points = [
  {x: 30, y: 20},
  {x: 10, y: 50},
  {x: 40, y: 40},
]
console.log(points[1].y); // 2番目のyの値を表示



// 変数の挙動の違い---------------------------------------
let x  =  1;
let y = x;
x = 5;
console.log(x); // x=5
console.log(y); // y=1 順番通り

let x  =  [1, 2];
let y = x;
x[0] = 5;
console.log(x); // [5, 2]
console.log(y); // [5, 2] 配列は元データを呼び出す

let x  =  [1, 2];
let y = [...x]; // スプレッド構文で値そのものを代入
x[0] = 5;
console.log(x); // [5, 2]
console.log(y); // [1, 2]



// 文字列の便利な命令---------------------------------------
const str = 'hello,world';

// 【定数名.lengthで】文字数を表示
console.log(str.length); // 11

// 定数名.substring(開始位置, 終了位置); で文字列の部分取り出し
str.substring(2,4); // ll

// 一文字だけ取り出す（文字の取り出しのみ）
console.log(str[1]); // e ※文字の変更や関数を使えるわけではない

// 配列の要素を文字列として結合
const d = [2020, 12, 29];
console.log(d.join('/')) // 定数名.join('要素間に入れたい文字')
console.log(d.join('-'))
console.log(d.join('a'))
console.log(d.join('')) // ('')なもなく要素を詰めて表示

// 文字列を区切り文字で分割して配列
const t = '17:08:54';
console.log(t.split(':')); // ["17", "08", "54"]

// 分割代入を使って返り値を別々の定数に代入
const t = '17:08:54';
// t.split(':')で区切る
const [hour, minute,second] = t.split(':');
console.log(hour);
console.log(minute);
console.log(second);




// 数字計算の便利な命令---------------------------------------

const scores = [10, 3, 9];

// 要素を足す
let sum = 0;
scores.forEach(score => {
  sum += score;
});


// 要素の平均値
const avg = sum / scores.length;
console.log(sum);
console.log(avg);


// 小数点以下の扱い
Math.floor(avg); // 【Math.floor()】小数点以下を切り捨て
Math.ceil(avg); // 【Math.floor()】小数点以下を切り上げ
Math.round(avg); // 【Math.floor()】小数点以下を四捨五入
avg.toFixed(3); // 【定数名.toFixed(数);】小数点の桁数指定


// ランダムな数字を生成
Math.random(); // 0から1未満のランダムな数値を生成
Math.floor(Math.random() * (n + 1)); // nまでのランダム整数値
Math.floor(Math.random() * (max + 1 - min)) + min; // minからmaxまでのランダム整数値


// 日付を使う
const d = new Date(); // new Date() で現在日時
d.getFullYear(); // 2020 西暦
d.getMonth(); // 0-11 月(Jan:0, Feb:1, Mar:3, ...)
d.getDate(); // 1-31 日
d.getDay(); // 0-6 曜日(Sun:0, Mon:1, Thu:2, ...)
d.getHours(); // 0-23 時間
d.getMinutes(); // 0-59 分
d.getSeconds(); // 0-59 秒
d.getMilliseconds(); // 0-999 ミリ秒  1 ms = 1/1000 sec

// 特定の日時指定
const d = new Date(2020, 10); // 2020/11/01 00:00:00
d.setHours(10, 20, 30); // 2020/11/01 10:20:30
d.setDate(33); // 2020/12/03 10:20:30 超えたら自動補正
d.setDate(d.getDate() + 3); // ３日後 2020/12/06 10:20:30



