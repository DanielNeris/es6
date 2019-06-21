const myPromise = () => new Promise((resolve, reject) => {
    setTimeout(() => { resolve('OK') }, 2000);
});

// myPromise()
// .then(responde => {
//     console.log(responde);
// }).catch(err => {
//     console.log(err);
// });

async function executaPromise() {
    const response = await myPromise();

    console.log(response);
}

// const executaPromise = async () => {
//     console.log(await myPromise());
// };

executaPromise();