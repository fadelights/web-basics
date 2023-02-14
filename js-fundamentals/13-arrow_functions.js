/* similar to function expressions, there are
arrow functions used for the same purposes */
let boring = (a, b) => a + b;

let result = boring(13, 666);
console.log(result);

/* equivalent to this */
boring = function(a, b) {
    return a + b;
};

result = boring(13, 666);
console.log(result);

/* arrow functions can be multi-lined,
but then they would require an explicit
`return` statement */
interesting = (a, b) => {
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}

result = interesting(7, 13);
console.log(result);
