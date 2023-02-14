let condition = false;

// while
while (condition) {
    /* body */
}


// do...while
do {
    /* body */
} while (condition);


// for
for (let begin; condition; /* step */) {
    /* body */
}


// breaking loops
/* the directives `break` and `continue`
also exist in JS.
`break` stops the entire loop, while
`continue` stops the current iteration */


// labels
/* using labels, one may `break` (or `continue`)
out of nested loops */
outer: for (let i = 0; i < 4; i++) {
    inner: for (let j = 0; j < 3; j++) {
        console.log(`(${i}, ${j})`);
        if (i===2 && j===1)
            break outer;
    }
}
