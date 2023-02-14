## Debugging

JS provides a unique command called `debugger`.

```
let x = Math.sin(Math.PI);
debugger;
```

The `debugger` statement stops the execution of code,
and calls the debugger. The debugger (such as browser dev tools)
must be active or this statement will have no effect.

## One-liners

It is generally recommended not to use braces with one-liners.
For example, instead of

```js
if (condition) {somthing();}
```

it is recommended to just write

```js
if (condition) somthing();
```

## Nested blocks

One may use `continue` in if-statements to avoid
extra nesting. Instead of

```js
for (...) {
    if (condition) {
        // body
    }
}
```

one may write

```js
for (...) {
    if (!condition) continue;
    // body
}
```

## Conditionals

Use the following style of indentation/bracket/etc. for
if-like statements.

```js
if (condition) {
    // body
} else if {
    // body
} else {
    // body
}
```

## Style guides

Some common style guides are listed below.

- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Idiomatic.JS](https://github.com/rwaldron/idiomatic.js)
- [StandardJS](https://standardjs.com/)

## Linters

One may use linters to check for early-on bugs in the code, in addition
to enforcing a specific style on your project. Here are a few recommended
ones for JavaScript:

- [JSLint](https://jslint.com/)
- [JSHint](https://jshint.com/)
- [ESLint](https://eslint.org/)

## Comments

Code should be self-explanatory. If you find yourself using too many comments,
then your code is probably too complex and needs refactoring.

_In good code, the amount of such “explanatory” comments should be minimal._

Usually, dividing the code into different functions makes it
more self-descriptive.

### Where to use comments

- Birds-eye view of the code
- Documenting function parameters and usage
    - There is a special syntax, [JSDoc](http://en.wikipedia.org/wiki/JSDoc)
    for documenting functions
- Why a particular approach was taken
- Subtleties
