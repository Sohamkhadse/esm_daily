const arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

const doubled = arr.map(num => num * 2);
console.log(doubled);

const even = arr.filter(num => num % 2 === 0);
console.log(even);

const sort = arr.sort((a, b) => b - a);
console.log(sort);
