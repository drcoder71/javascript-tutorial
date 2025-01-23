// Promise - Asinxron operatsiyalarni boshqarish uchun ishlatiladigan object.
// Promise uch xolatdan birida bo'ladi: Pending, fulfilled, rejected.

// Promiselarning 3 asosiy vazifalari:
// 1. Asinxron operatsiyalarni boshqarish.
// 2. Kodlarni o'qish va boshqarishda osonroq qilish.
// 3. Callback hell muammolarni hal qilish va Xatoliklarni oldini olish.

const myPromise = new Promise((resolve, reject) => { // new Promise conturctor yordamida promise yaratiladi.
    // Asinxron operatsiya
    setTimeout(() => {  // setTimeout webAPI hisoblangani uchun bu yerda asinxron operatsiya bajariladi
        const success = true; // success bu yerda status vazifasi bajaradi.  Bu yerda operatsiyaning muvaffaqiyatli yoki muvaffaqiyatsizligini belgilash mumkin
        if (success) {
            resolve("Operatsiya muvaffaqiyatli bajarildi!");  // resolve funksiyasi muvaffaqiyatli natija qaytarilganda ishlaydi
        } else {
            reject("Operatsiya muvaffaqiyatsiz tugadi."); // reject funksiyasi muvaffaqiyatsiz natija qaytarilganda ishlaydi
        }
    }, 2000);  // setTimeout funksiyasi 2 sekunddan keyin ishga tushadi
});

// myPromise ning natijasini olish uchun then va catch metodlari ishlatiladi.
myPromise
    .then((message) => { // .then() muvaffaqiyatli natija qaytarilganda ishlaydi
        // console.log(message); // "Operatsiya muvaffaqiyatli bajarildi!" ni chop etadi
    })
    .catch((error) => {  // .catch() muvaffaqiyatsiz natija qaytarilganda ishlaydi
        // console.error(error); // "Operatsiya muvaffaqiyatsiz tugadi." ni chop etadi
    })
    .finally(() => {
        // console.log("Promise bajarildi");
        // .finally() promise bajarilgandan keyin ishlaydi
    });

// Promise chaining
// Bir nechta Promiselarni ketma-ket bajarish usuli.
// har bir .then() chaqiruvi yangi Promise qaytaradi, bu esa keyingi .then() chaqiruvi uchun natija sifatida ishlatiladi.

const chainedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("STO Birinchi operatsiya muvaffaqiyatli bajarildi.")
    }, 2000)
})

chainedPromise.then((msg) => { // bu yerda .then() chainedPromisening natijasini olishga xizmat qiladi.
    // console.log(msg);
    return new Promise((resolve, reject) => {  // yangi Promise yaratildi va uning natijasi 1 soniyadan so'ng olinadi.
        setTimeout(() => {
            // resolve("ikkinchi operatsiya bajarildi")
        }, 0)
    })
}).then((msg) => { // bu yerda .then() o'zidan oldingi .then()da yaratildan new Promisening natijasini olish uchun ishlaydi.
    console.log(msg);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("uchinchi operatsiya bajarildi")
        }, 1000)
    })
}).then((msg => {
    // console.log(msg);
}))

setTimeout(() => {  //  bu yerda 0 soniya bo'lganligi uchun ham birinchi bo'lib bajarildi.
    // console.log('promislardan keyingi amaliyot');
})

// Promise.all()
// Bir nechta promiselarni parallel bajarib natijani olishda ishlatiladi.
// Promise.all() methodida promiselardan birida natija reject bilan qaytadigan bo'lsa promise.all()ning natijasi catch() blogiga o'tib ketadi.
// Promise.all() methodidan resolve natija arr bo'lib qaytadi.
// Promise.all() ga kiritilgan promiselar ketma ketligida bajarib bo'lgandan keyin natija ham ketma ketlikda olinadi.

const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('birinchi promise bajarildi.')
    }, 1000)
})
const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ikkinchi promise bajarildi.')
    }, 2000)
})
const thirdPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('uchinchi promiseda xatolik.')
    }, 3000)
})

Promise.all([secondPromise, firstPromise, thirdPromise])
    .then((msg) => {
        console.log(msg);
    })
    .catch((err) => {
        console.error(err);
    });

// Promise.race()
// bir nechta promiselari parallel bajaradi va ulardan qaysi biri birinchi bajarilsa shuning natijasi birinchi barajarilib tugallanadi.
// promise.race() ga berilgan promiselardan birinchi bo'lib qanday qiymat qaytsa ham o'sha qiymatni oladi.
// promise.race() je da parallel ravishda EventLoop orqali bajariladi.
Promise.race([firstPromise, secondPromise, thirdPromise])
    .then((msg) => {
        console.log(msg);
    })
    .catch(err => {
        console.error(err)
    });

// ishlash prinsipi:
// 1. Asinxron operatsiyalar webApi orqali bajariladi.
// 2. WebApi da bajarilgan operatsiyalar CallBackQueue ga callback fn bo'lib qo'shiladi.
// 3. CallBackQueue dan EventLoop orqali CallStack ga qo'shiladi.

// Async/await
// asnc/await yoradamida yozilgan kodlar syncron kodga o'xwaydi.
// xatoliklarni boshqatishda try/catch blocklari yordam beradi.
// Promiselarni boshqarishda await kalit so'zi yordam beradi.
// async function har doim promise qaytaradi. 
// agar functionda return qaytarilsa avtomatik ravishda Promise ishiga o'raladi.
const firstOperation = () => {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            console.log('birinchi operatsiya');
            resole("birinchi natija")
        }, 1000)
    })
}
const secondOperation = () => {
    return new Promise((resole, reject) => {
        setTimeout(() => {
            console.log('ikkinchi operatsiya');
            resole("ikkinchi natija")
        }, 1000)
    })
}

const performOperations = async () => {
    try {
        const result1 = await firstOperation()
        console.log(result1);
        const result2 = await secondOperation()
        console.log(result2);
    }
    catch (err) {
        console.error(err)
    }
}

performOperations()