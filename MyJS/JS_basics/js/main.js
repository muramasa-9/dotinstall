'use strict';


{
  const d = new Date(2020, 10); // 2020/11/01 00:00:00
  d.setHours(10, 20, 30); // 2020/11/01 10:20:30
  d.setDate(33); // 2020/12/03 10:20:30 超えたら自動補正
  d.setDate(d.getDate() + 3); // ３日後 2020/12/06 10:20:30
  console.log(d);
  // console.log(`${d.getMonth() + 1}月${d.getDate()}日`)



}