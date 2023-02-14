/* there are quite a few ways to define methods
for objects in JS, all of them pretty similar to
regular function declarations */

/* use the `this` keyword to reference properties of
the current object */

let npc = {
    name: "Mild Mannered Mildred",
    type: "Humanoid",
    weapon: "Butcher's Knife",

    getName() {
        return this.name;
    },

    // or...
    getType: function() {
        return this.type;
    },

    // but NOT like this!
    // getWeapon: () => this.weapon,
};

console.log(`${npc.getName()} is a ${npc.getType()}.`);

/* we can even assign regular functions to objects */
function shout(s) {
    s = String(s);
    console.log(s.toUpperCase()+"!!!");
}

npc.shout = shout;
npc.shout("die");

// one can also use the bracket notation, but its really nasty
npc["shout"]("victory");

/* methods can be chained, which makes sense */
let ladder = {
    step: 0,

    up() {
        this.step++;
        return this;
    },

    down() {
        this.step--;
        return this;
    },

    show() {
        console.log(`Currently at step ${this.step}.`);
        return this;
    },
};

ladder.up().down().up().up().show();

// or...
ladder
    .up()
    .down()
    .up()
    .down()
    .down()
    .show();

/* "this" can be used inside regular
functions as well but these functions should
later be assigned as some object's method */
function shoutName() {
    console.log(this.name.toUpperCase()+"!!!");
}

let person = {
    name: 'Eren'
};

person.shoutName = shoutName;
person.shoutName();
