/* variables may be declared using
`const`, `let` or `var`.
variables declared using `const`
cannot change their value later in the code  */

/* in old code, variables could be dynamically
defined, i.e. without the use of keywords like `let`,
but "use strict" prevents this in new code */

/* JS variable names can be made of 
letters, numbers, $ and _
but cannot start with a number */

/* camelCase naming is recommended.
use UPPERCASE naming for universally accepted
constants, such as hex color codes and
math constants */

const PI = 3.14;
const birth = 2000;

let age = 21;
age = 22;

var zipCode = 1919683141;
zipCode = 0;

/* once declared, variables cannot be
re-declared:
```
let age;  // results in error
``` */
