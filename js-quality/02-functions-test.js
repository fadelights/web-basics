/* Behvior Driven Development
is a three in one package:
1- tests
2- documentation
3- examples

before writing the code for a function,
we can describe its behavior. this
"description" is called a "specification"
or "spec" and contains descriptions of
use cases together with tests for them

in BDD, we begin by writing tests that will fail.
then, we'll implement the functionality in our code */

/* the functions `describe` and `it` are available
as part of the "mocha" framework.
`assert.equal` is provided by "chai" */
describe("pow", function() {
    it("raises `x` to the `n`-th power, given an integer `n`", function() {
        assert.equal(pow(2, 3), 8);  // checks for non-strict equality
        assert.equal(pow(3, 4), '81');
    });

    it("returns the n-th root of `x`, given a non-integer `n`", function() {
        assert.equal(pow(25, .5), 5);
        assert.approximately(pow(64, 1/4), 2.8, 0.1);  // approximate equality within a range
        assert.strictEqual(pow(27, 1/3), 3);  // strict equality
    })
});

/* for loops can be used for automatic
assert generation */
describe("add", function() {
    function makeTest(a, b) {
        let expected = a + b;

        it(`adds ${a} and ${b}`, function() {
            assert.equal(add(a, b), expected);
        });
    }

    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            makeTest(i, j);
        }
    }
});

/* describes can be nested,
which creates a subgroup of tests */
describe("subtract", function() {
    describe("subtracts 3 from a", function() {
        function makeTest(a) {
            let expected = a - 3;
            it(`${a} - 3 is ${expected}`, function() {
                assert.equal(subtract(a, 3), expected);
            });
        }

        for (let a = 4; a >= -1; a--) makeTest(a);
    });
});

/* before/after functions will run
before/after tests and beforeEach/afterEach
functions will run before/after each `it` */
describe("demo", function() {
    before(() => alert("Testing started – before all tests"));
    after(() => alert("Testing finished – after all tests"));

    beforeEach(() => alert("Before a test – enter a test"));
    afterEach(() => alert("After a test – exit a test"));

    it('test 1', () => alert(1));
    it('test 2', () => alert(2));
});
