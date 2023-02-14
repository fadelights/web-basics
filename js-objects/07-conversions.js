/* JS does not offer defining special methods for handling
of object addition and subtraction; objects are automatically
converted to primitives in special contexts */

/* conversion of objects to booleans:
all objects are true in a boolean context */

/* conversion of objects to numeric:
some special objects like `Date` have a subtraction
operator defined for them. */

/* conversion of objects to string:
printing an object converts it to a string */

/* we CAN implement string and numeric conversions
by ourselves, but take note that the result of, e.g.
`obj1 + obj2` is never another object; only a primitve  */
