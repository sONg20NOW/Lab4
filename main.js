let sum = (a, b) => a + b;

let add = sum;
console.log(typeof add);
console.log(typeof sum);
sum["1"] = 1;
console.log(sum[1]);
console.log(add[1]);

let x = [1, 2, 3, 4, 5];
y = x.map((n) => n + 1);
console.log("y: ", y);
console.log("x: ", x);

z = x.filter((n) => n % 2 === 0);
console.log("z: ", z);
console.log("x: ", x);

x.forEach((f) => {
    console.log(f);
});

let xx = x.filter((n) => n % 2 === 0);
console.log("xx: ", xx);
