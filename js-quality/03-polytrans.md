The JavaScript language steadily evolves. New proposals to the language appear regularly, they are analyzed and, if considered worthy, are appended to the list at https://tc39.github.io/ecma262/ and then progress to the specification.

But how do we make our modern code work on older engines that don’t understand recent features yet?

### Transpilers

A transpiler is a special piece of software that translates source code to another source code. It can parse (“read and understand”) modern code and rewrite it using older syntax constructs, so that it’ll also work in outdated engines. [Babel](https://babeljs.io/) is one of the most prominent transpilers out there.

### Polyfills

New language features may include not only syntax constructs and operators, but also built-in functions. As we’re talking about new functions, not syntax changes, there’s no need to transpile anything here. We just need to declare the missing function.

Two interesting libraries of polyfills are:

- [core js](https://github.com/zloirock/core-js) that supports a lot, allows to include only needed features.
- [polyfill.io](http://polyfill.io/) service that provides a script with polyfills, depending on the features and user’s browser.
