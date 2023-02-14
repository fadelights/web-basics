/* there are three ways of string creation in JS:
'single', "double", `backtick`
the last one can be used for embedding variables */
const planet = 'Jupiter';
const person = "Jun";
const year = 12021;
const greet = `Greetings, ${person} from ${planet} in the year ${year} 👋`;

console.log(greet);

/* string concatenation */
'Oga' + 'Level' + 'Dense' + '😪';

/* CAUTION
unlike other math operators, which
given a string and number, convert
the string to a number, the `+` operator
converts the number to a string */
let prettyLegit = 20 - '20';
let alsoLegit = 20 * '20';
let stillLegit = 20 / '20';
let notSoLegit = 20 + '20';

console.log("20 - '20' = %s ✔", prettyLegit);
console.log("20 * '20' = %s ✔", alsoLegit);
console.log("20 / '20' = %s ✔", stillLegit);
console.log("20 + '20' = %s 💀", notSoLegit);

// NOTE
console.log("1 + 1 + '1' = %s", 1 + 1 + '1');
console.log("'1' + 1 + 1 = %s", '1' + 1 + 1);

/* the backtick respects the newline literal
while other types of strings don't. if you
wish for the backtick to ignore the newline
literal, use a `\` */
let cashMoney = 
`That was very \
cash money of you. 😎`;

let veryCashMoney = 
`That was, also, extremely
cash money of you. 😎😎`;

let notCashMoney = 
'That wasn\'t very \
cash money of you 😒';

console.log(cashMoney + '\n' + 
    veryCashMoney + '\n' + 
    notCashMoney);
