const start = performance.now();

const arr = Array(10000000)
    .fill(0)
    .map((el, i) => i);

const end = performance.now();

console.log(arr);

console.log(end - start + 'ms');
