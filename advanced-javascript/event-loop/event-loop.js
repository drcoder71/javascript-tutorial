// +-----------------+
// |   Call Stack    |  <-- Sinxron kod shu yerda bajariladi
// +-----------------+
//         ↓
// +-----------------+
// |   Web API       |  <-- setTimeout, fetch, event listeners shu yerda ishlaydi
// +-----------------+
//         ↓
// +-----------------+
// |  Callback Queue |  <-- setTimeout va boshqa asinxron funksiyalar natijasi shu yerga tushadi
// +-----------------+
//         ↓
// +-----------------+
// | Microtask Queue |  <-- Promises va MutationObserver shu yerga tushadi
// +-----------------+

console.log("1️⃣ Sinxron kod");

// setTimeout Web API orqali ishlaydi
setTimeout(() => {
    console.log("2️⃣ setTimeout callback");
}, 0);

// Promise Microtask Queue'ga tushadi
Promise.resolve().then(() => console.log("3️⃣ Promise callback"));

console.log("4️⃣ Yana sinxron kod");


// 🛠 Web Workers nima?
// Web Workers—bu JavaScript kodini asosiy (main) threaddan alohida, fonda bajarishga imkon beruvchi mexanizm.

// Foydalari : 
// ✅ Murakkab hisob-kitoblar (matematik operatsiyalar, AI modellari)
// ✅ Fayllarni katta miqdorda qayta ishlash
// ✅ DOM manipulyatsiyasiga ta’sir qilmaydigan asynchronous processing

// ⚠️ Web Worker Cheklovlari
// 1️⃣ DOM ga kira olmaydi – Web Workers document, window, alert() kabi obyektlarga kira olmaydi.
// 2️⃣ Ko‘proq resurs talab qiladi – Har bir worker yangi thread ochadi, shuning uchun keraksiz worker yaratishdan qochish kerak.
// 3️⃣ Worker'lar parent sahifaga bog‘liq – Agar sahifa yangilansa yoki yopilsa, Web Worker o‘chib ketadi.
