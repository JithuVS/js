function squares(a, b) {
    let start = Math.ceil(Math.sqrt(a));
    let end = Math.floor(Math.sqrt(b));
    return (end - start + 1);
}

let result = squares(2,50);
console.log(result);