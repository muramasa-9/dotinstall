'use strict';

{
  function createColumn(col) {
    const source = [];
    for (let i = 0; i < 15; i++) {
      // 1 ... 15
      // source[i] = i + 1 + 15 * 0;
      // 16 ... 30
      // source[i] = i + 1 + 15 * 1;
      // 31 ... 45
      // source[i] = i + 1 + 15 * 2;
      source[i] = i + 1 + 15 * col;
    }

    const column = [];
    for (let i =0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }

    return column;
  }


  function createColumns() {
    const columns = [];
    // columns[0] = createColumn(0); // bの列
    // columns[1] = createColumn(1); // iの列
    // columns[2] = createColumn(2); // nの列
    // columns[3] = createColumn(3); // gの列
    // columns[4] = createColumn(4); // oの列
    for (let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  }


  // console.table(columns); // コンソールで表形式で表示


  // rowとcolumnを入れ替え
  // function createBingo(columns) {
  //   const bingo = [];
  //   for (let row = 0; row < 5; row++) {
  //     bingo[row] = []; // 取り出した値をひとつのリストにまとめる
  //     for (let col = 0; col < 5; col++) {
  //       bingo[row][col] = columns[col][row];
  //     }
  //   }
  //   console.table(bingo);
  //   return bingo;
  // }


  function renderBingo(columns) {
    for (let row = 0; row < 5; row++) {
      const tr = document.createElement('tr');
      for (let col = 0; col < 5; col++) {
        const td = document.createElement('td');
        td.textContent = columns[col][row];
        tr.appendChild(td);
      }
      document.querySelector('tbody').appendChild(tr);
    }
  }

  const columns = createColumns();
  // const bingo = createBingo(columns);
  renderBingo(columns);



  // 一列の配列の作り方 記述が多すぎる
  // const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  // const b = [];
  // b[0] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[1] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[2] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[3] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // b[4] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
  // 末尾の[0]がないと個別のリストを５個作ることになる

}