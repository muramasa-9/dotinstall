'use strict';

console.clear();

{

// カレンダー部分の作成
  const today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();


  function getCalendarHead() { // 先月のデータ取得
    const dates = [];
    const d = new Date(year, month, 0).getDate();
    const n = new Date(year, month, 1).getDay();

    for (let i = 0; i < n; i++) {
      // 30
      // 29, 30
      // 28, 29, 30
      dates.unshift({ // .unshift()でリストの先頭に追加
        date: d - i,
        isToday: false,
        isDisabled: true, // 薄くする
      });
    }

    return dates;
  }


  function getCalendarBody() { // 今月のデータ取得
    const dates = []; // date:日付 day:曜日
    const lastDate = new Date(year, month + 1, 0).getDate();
    // 通常は今月１日 => new Date(year, month, 1)
    // 通常は先月末日 => new Date(year, month, 0)

    for (let i = 1; i <= lastDate; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: false,
      });
    }

    if (year === today.getFullYear() && month === today.getMonth()) {
      dates[today.getDate() - 1].isToday = true; // 今日の日にちは正
    }

    return dates;
  }


  function getCalendarTail() { // 来月のデータ取得
    const dates = [];
    const lastDay = new Date(year, month + 1, 0).getDay();

    for (let i = 1; i < 7 - lastDay; i++) {
      dates.push({
        date: i,
        isToday: false,
        isDisabled: true,
      });
    }
    return dates;
  }


  function clearCalendar() { // カレンダーの更新時に前データ削除
    const tbody = document.querySelector('tbody');
    while (tbody.firstChild) { // tbodyに最初の子要素がある時
      tbody.removeChild(tbody.firstChild); // tbodyの最初の子要素だある限り削除してね
    }
  }


  function renderTitle() { // タイトルの編集
    const title = `${year}/${String(month + 1).padStart(2, 0)}`;
      document.getElementById('title').textContent = title; // タイトルを挿入
  }


  function renderWeeks() { // 週毎のカレンダー作成
    const dates = [ // 各月のデータをまとめる
      ...getCalendarHead(), // ...がないと３つのリストが入っていることになる
      ...getCalendarBody(),
      ...getCalendarTail(),
    ];
    const weeks = []; // 7日ごと１週間の列リストを作る
    const weeksCount = dates.length / 7; // 何週あるかを計算

    for (let i = 0; i < weeksCount; i++) { // 週分の繰り返し
      weeks.push(dates.splice(0, 7)); // 7日ごとにリストの末尾に追加
    }

    weeks.forEach(week => {
      const tr = document.createElement('tr');
      week.forEach(date => {
        const td = document.createElement('td');

        td.textContent = date.date;
        if (date.isToday) {
          td.classList.add('today');
        }
        if (date.isDisabled) {
          td.classList.add('disabled');
        }

        tr.appendChild(td);
      });
      document.querySelector('tbody').appendChild(tr);
    });
  }


  function createCalendar() {
    clearCalendar(); // 関数呼び出し
    renderTitle(); // 関数呼び出し
    renderWeeks(); // 関数呼び出し
  }


// クリックイベントの作成
  // 先月の表示
  document.getElementById('prev').addEventListener('click', () => {
    month--;
    if (month < 0) { // 1月より前なら前年になる
      year--;
      month = 11;
    }

    createCalendar(); // カレンダーを再度表示
  });

  // 来月の表示
  document.getElementById('next').addEventListener('click', () => {
    month++;
    if (month > 11) { // 1月より前なら前年になる
      year++;
      month = 0;
    }

    createCalendar(); // カレンダーを再度表示
  });

  // Todayのクリック処理
  document.getElementById('today').addEventListener('click', () => {
    year = today.getFullYear();
    month = today.getMonth();

    createCalendar(); // カレンダーを再度表示
  });


  createCalendar();

}