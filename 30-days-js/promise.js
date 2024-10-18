// const promise1 = new Promise((resolve) => setTimeout(() => resolve("Fast"), 500));
async function sleep(millis){
    const promise1 = new Promise((resolve) => setTimeout(() => resolve("Fast"), millis));
    return promise1
}
console.time('now')
await sleep(3000)
console.timeEnd('now')