setInterval(() => {
  dt = new Date();
  ht = dt.getHours();
  mt = dt.getMinutes();
  st = dt.getSeconds();
  hr = 30 * ht + mt / 2;
  mr = 6 * mt;
  sr = 6 * st;

  hour.style.transform=`rotate(${hr}deg)`;
  minute.style.transform=`rotate(${mr}deg)`;
  second.style.transform=`rotate(${sr}deg)`;
}, 1000);
