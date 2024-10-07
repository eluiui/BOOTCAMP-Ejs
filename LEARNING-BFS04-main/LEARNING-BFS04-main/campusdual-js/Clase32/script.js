function delay(tiempo) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, tiempo * 1000);
    })
}

console.log("start");
delay(5)
    .then(() => {
        console.log("Pasaron 5 sec");
        return delay(5)
    })
    .then(() => {
        console.log("Pasaron otros 5 sec");
    });