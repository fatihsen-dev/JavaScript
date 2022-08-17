let dates = new Date("0000-00-00  00-00-00");

// setFullYear(); Yıl değerini değiştirmek için kullanılır
dates.setFullYear(1999);

// setMonth(); Ay değerini değiştirmek için kullanılır
dates.setMonth(2);

// setDate(); Tarih bilgisini değiştirmek için kullanılır (ayın kaçıncı günüyse o değişir )
dates.setDate(10);

// setHours(); Saat bilgisi değiştirmek için kullanılır
dates.setHours(18);

// setMinutes(); Dakika bilgisi değiştirmek için kullanılır
dates.setMinutes(30);

// setSeconds(); Saniye bilgisi değiştirmek için kullanılır
dates.setSeconds(40);

console.log(dates);
