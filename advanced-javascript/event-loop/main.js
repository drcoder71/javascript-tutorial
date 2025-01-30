const worker = new Worker("worker.js")

worker.postMessage(1e9)

worker.onmessage = function (event) {
    console.log("natija" + event.data);

}

// parallel ishlash jarayoni massivlar orqali bajariladi.