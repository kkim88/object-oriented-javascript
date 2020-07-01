
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
    //your code here...

    constructor() {

        // error to prevent instantiation

        if (this.constructor == Creature) {
            throw new error("Abstract Class Creature cannot be instantiated!");
        }
    }

    // make move() and act() and make them abstract with errors

    move() {
        throw new error("This is an abstract method that cannot be invoked.")
    };

    act() {
        throw new error("This is an abstract method that cannot be invoked.")
    };
};

// create subclasses

class Human extends Creature {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // implement act() and move() with overrides

    move() {
        console.log(`${this.name} moves by walking.`)
    }

    act() {
        console.log(`${this.name} says they are ${this.age} years old.`)
    }
};

class Bird extends Creature {

    constructor(color, wingspan) {
        this.color = color;
        this.wingspan = wingspan;
    }

    move() {
        console.log(`The bird flys using their wings with a wingspan of ${this.wingspan}.`)
    }

    act() {
        console.log(`The bird shows off its ${this.color} feathers.`)
    }
}

class Snake extends Creature {

    constructor(habitat, diet) {
        this.habitat = habitat;
        this.diet = diet;
    }

    move() {
        console.log(`This snake moves around the ${this.habitat} by slithering.`);
    }

    act() {
        console.log(`The snake hunts, looking for ${this.diet}.`)
    }
}




/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
    name;

    // keep as is

    eat() {
        console.log(this.name + " is eating");
    };

    // refactor

    sleep() {
        console.log(this.name + " is sleeping");
    };

    // refactor

    code() {
        console.log(this.name + " is coding");
    };

    // refactor

    repeat() {
        console.log(this.name + " is repeating the above steps, yet another time");
    };

    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("Many of the fields and prototypes in the parent and child classes did not match, causing the inconsistencies in inheritance. Although it was not strictly necessary, I chose a single standardized way to write the functions in order to properly overwrite them in the child classes. I could have rewritten the child functions to match the ones in the Person class to rewrite them, but that looks incredibly confusing and messy and consistency is good for maintaining clean, readable code.");
    };

};


class Teacher extends Person {

    //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    };

    // working correctly no change needed

    eat() {
        console.log(this.name + " loves to teach before eating");
    };

    // did not work parent was refactored

    sleep() {
        console.log(this.name + " sleeps after preparing the lesson plan");
    };

    // worked, but refactored for consistency

    code() {
        console.log(this.name + " codes first, then teaches it the next day.");
    };

    // did not work, parent was refactored

    repeat() {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    };
};


class Student extends Person {
    //set up your methods in this student class, so all of these methods will override the methods from the super class.

    // constructor to inherit name

    constructor(name) {
        super(name);
        this.name = name;
    }

    //eat method should print out - <stduent name> studies, then eats

    eat() {
        console.log(`${this.name} studies, then eats`);
    }

    //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

    sleep() {
        console.log(`${this.name} studies coding so much, that they dream about it in their sleep`);
    };

    //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!

    code() {
        console.log(`${this.name} was first overwhelmed by coding, but kept at it, and now has become a coding guru!`);
    };

    //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.

    repeat() {
        console.log(`${this.name} keeps on studying, coding, eating, and sleeping, and puts it all on repeat.`);
    };

};


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Pupil Student");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();




//****************************************************************************************************************************************************************************************   
//Bonus Exercise:

//3. Consider the following class:

class Cook {

    prepare(food1, food2, food3) {
        console.log("The cook is cooking " + food1, food2, food3);
    }

    prepare = function () {
        console.log('The cook is cooking');
    }

    explain = () => {
        console.log("Looking at the methods, there are two prepare functions. These functions are very similar with the sole difference that the first one takes the arguments for food items. The second empty one, however, overrides the first due to its equal sign. A simple fix for this is to simply delete the second prepare function. If you wish to keep everything, I would rename the second function to something else so that it does not override the first.");
    }

}

const cook = new Cook();

cook.prepare("turkey", "salami", "pizza");

cook.explain();

