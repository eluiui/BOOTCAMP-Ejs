console.log("Consultando");
fetch("https://httpbin.org/get")
    .then(res => {
        return res.json();
    })
    .then((data) => console.log({ data }))
    .catch((err) => {
        console.error(err)
    });

console.log("Consultado");


fetch("https://httpbin.org/geta")
    .then(res => {
        if (res.status === 404) {
            return Promise.reject("Error 404");
        } else {
            return res.json();
        }
    })
    .then((data) => console.log({ data }))
    .catch((err) => {
        console.error(err)
    });

try {
    fetch("https://httpbin.org/geta")
        .then(res => {
            console.log(res);
            if (res.status === 404) {
                return Promise.reject("Error");
            } else {
                return res.json();
            }
        })
        .then((data) => console.log({ data }));
} catch {
    console.log("Nunca aqui");
}
