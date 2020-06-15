//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

//your code here...

class WhyClass {
    // single property called purpose

    constructor(purpose, explain, pieces) {
        this.purpose = purpose;
    };

    // function to print purpose

    explain() {
        return console.log(`${this.purpose}`)
    }

    // function to print string

    pieces() {
        return console.log("The parts essential to building a class are properties, constructors, and methods.");
    }
}

// initializes new object called useclass (because it explains why we should use classes)

const useclass = new WhyClass("Classes are used as blueprints to create objects.");

// calls explain and pieces functions to print

useclass.explain();
useclass.pieces();

/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


//your code here...

class Creature {
    // properties of creatures

    constructor(name, legs, diet, actions) {
        this.name = name;
        this.legs = legs;
        this.diet = diet;
        this.actions = actions;
    }
}

// initialize 6 animals found in the Amazon rainforest as objects

const riverdolphin = new Creature("river dolphin", 0, "seafood", ["swim", "sonar"]);
const jaguar = new Creature("jaguar", 4, "meat", ["pounce", "roar"]);
const monkey = new Creature("monkey", 2, "fruit", ["climb", "grab"]);
const macaw = new Creature("macaw", 2, "nuts", ["fly", "speak"]);
const caiman = new Creature("caiman", 4, "meat", ["swim", "bite"]);
const anaconda = new Creature("anaconda", 0, "meat", ["slither", "hiss"]);

// print properties each object

console.log(riverdolphin);
console.log(jaguar);
console.log(monkey);
console.log(macaw);
console.log(caiman);
console.log(anaconda);




/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    // not every property will have a value for every shape

    constructor(name, sides, base, height, length, width, radius) {
        this.name = name; // name of shape
        this.sides = sides; // arrray of sides for triangle, number of sides for other
        this.base = base; // triangle base, determined by first side in array
        this.height = height; // triangle height
        this.length = length; // rectangle
        this.width = width; // rectangle
        this.radius = radius; // circle
    }

    // functions for shapes. May not be needed? Question does not ask for them.
    // functions for Triangle area and perimiter

    triArea() {
        return console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    }

    triPerim() {
        return console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2])}`);
    }

    // functions for square area and perimiter

    sqArea() {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
    }

    sqPerim() {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width)}`)
    }

    // functions for circle are and circumfrence

    cirArea() {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
    }

    cirCirumfrence() {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

// initialize shapes, if a property does not apply to a certain shape, set to null
// can find base mathematically using Heron's formula. Doens't look fun to program. Will add if I have time.

const triangle = new Shape("triangle", [4, 7, 7], 4, 6.71, null, null, null);
const square = new Shape("square", 4, null, null, 2, 5, null);
const circle = new Shape("circle", 1, null, null, null, null, 5);

// print objects to verify them

console.log(triangle);
console.log(square);
console.log(circle);


/* OLD CODE FOR REFERENCE
const triangle = {
    name: "triangle",
    sides: [4, 7, 7], //lengths of each side
    base: null,
    height: null, //determine this height using basic geometry.  You may need to research this one.
    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    },
    calcPerimeter: function () {
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2])}`)
    }
}

triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
    name: "rectangle",
    sides: 4,
    length: 2,
    width: 5,
    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
    },
    calcPerimeter: function () {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width)}`)
    }
}

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
    name: "circle",
    sides: 1,
    radius: 5,
    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
    },
    calcCircumference: function () {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

console.log(circle);
circle.calcCircumference();
circle.calcArea();
*/


/*********************************************** 
Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal. */

// create shapes. nobody said i had to give values to them
const pentagon = new Shape("pentagon", 5, null, null, null, null);
const hexagon = new Shape("hexagon", 6, null, null, null, null, null);
const octagon = new Shape("octagon", 8, null, null, null, null, null);

/* HOW TO CALCULATE:

PENTAGON:

Let a = the length of one side of the pentagon

Perimeter: 5a (multiply the length of one side by 5)

Area: 1/4 * the square root of (5(5 + 2 * the square root of 5)) * a^2. In Javascript, it would look something like 1/4 * sqrt(5 * (5 + 2 * sqrt(5))) * a ** 2. I'm 95% sure that is right.

HEXAGON:

Let a = the length of one side of the hexagon

Perimeter: 6a (multiply the length of one side by 6)

Area: 3 * the square root of 3 / 2 * a^2. Or (3 * sqrt(3)) / 2 * a ** 2 in Javascript maybe.

OCTAGON:

Let a = the length of one side of the octagon

Perimeter: 8a (multiply the length of one side by 8)

Area: 2(1 + the square root of 2) * a^2. In Javascript that's 2 * (1 + sqrt(2)) * a ** 2

*/

//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.

class Earth {
    name;
    planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

    constructor(name, num) {
        this.name = name;
        this.planetNum = num;
    }

}

const earth = new Earth('earth', 3);
console.log(earth);

// easiest fix would be to simply modify the class to not be named "Earth", but I don't think that's what the question wants me to do.


