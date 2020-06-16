/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. 

    //your code here... */

class Book {
    #author = "";
    #publisher = "";
    constructor(inpAuth, inpPub) {
        this.#author = inpAuth;
        this.#publisher = inpPub;
    }

    // functions to return variables

    getAuthor() {
        return this.#author;
    }

    getPublisher() {
        return this.#publisher;
    }

    // functions to set variables

    setAuthor(inpAuth) {
        this.#author = inpAuth;
    }

    setPublisher(inpPub) {
        this.#publisher = inpPub;
    }
}

class Author {
    #name = "";
    #books = "";
    constructor(inpName, inpBooks) {
        this.#name = inpName;
        this.#books = inpBooks;
    }

    // return variables

    getName() {
        return this.#name;
    }

    getBooks() {
        return this.#books;
    }

    // set variables

    setName(inpName) {
        this.#name = inpName;
    }

    setBooks(inpBooks) {
        this.#books = inpBooks;
    }

}

class Publisher {
    #authors = [];
    #books = [];
    constructor(inpAuths, inpBooks) {
        this.#authors = inpAuths;
        this.#books = inpBooks;
    }

    // return variables

    getAuthors() {
        return this.#authors;
    }

    getBooks() {
        return this.#books;
    }

    // set variables

    setAuthors(inpAuths) {
        this.#authors = inpAuths;
    }

    setBooks(inpBooks) {
        this.#books = inpBooks;
    }
}

class Review {
    #rating = 0;
    #user = "";
    constructor(inpRating, inpUser) {
        this.#rating = inpRating;
        this.#user = inpUser;
    }

    // return variables

    getRating() {
        return this.#rating;
    }

    getUser() {
        return this.#user;
    }

    // set variables

    setRating(inpRating) {
        this.#rating = inpRating;
    }

    setUser(inpUser) {
        this.#user = inpUser;
    }
}

/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.


    //your code here... */

class Umbrella {
    constructor(organization, headquarters, founded) {
        this.organization = organization; // org name
        this.headquarters = headquarters; // location of headquarters
        this.founded = founded; // year founded
    }

    // methods to return property information

    getHeadquarters() {
        return this.headquarters;
    }
    getOrg() {
        return this.organization;
    }
}

class Company extends Umbrella {
    constructor(company, employees, focus, organization) {
        super(organization);
        this.company = company; // company name
        this.employees = employees; // number of employees
        this.focus = focus; // focus of company (such as industries it's in)
    }

    // methods
    // method to increase employees when hiring new workers

    addEmployees(qty) {
        this.employees = this.employees + qty;
    }

    // method to decrease employees when laying off workers

    subEmployees(qty) {
        this.employees = this.employees - qty;
    }
}

class Site extends Company {
    constructor(location, hours, workers, company) {
        super(company);
        this.location = location; // location of site
        this.hours = hours; // operating hours of site
        this.workers = workers; // number of employees at site
    }

    // methods

    getHours() {
        return this.hours;
    }

    getWorkers() {
        return this.workers;
    }
}

class Employee extends Site {
    constructor(name, title, salary, phone, email, location) {
        super(location);
        this.name = name; // employee name
        this.title = title; // employee title
        this.salary = salary; // employee salary
        this.phone = phone; // employee phone number
        this.email = email; // employee email
    }

    // methods
    // method to increase employee salary by adding a certain amount

    incSalary(amt) {
        this.salary = this.salary + amt;
    }

    // method for employee to say name and title

    getIntro() {
        return console.log(`My name is ${this.name} and I am a ${title}.`)
    }
}
// Umbrella company

const allegis = new Umbrella("Allegis Group", "Hanover, MD", 1983);

// Companies

const aerotek = new Company("Aerotek", 3000, "Engineering, scientific, and industrial skills", allegis);
const teksystems = new Company("TEKsystems", 5000, "Technology solutions, strategic planning, implentation", allegis);
const astoncarter = new Company("Aston Carter", 1500, "Accounting, finance, and professiona skills", allegis);

// Sites

// Aerotek

const huntsville = new Site("Huntsville, AL", "8 AM to 5 PM", 200, aerotek);
const tempe = new Site("Tempe, AZ", "8 AM to 5 PM", 300, aerotek);
const fairfield = new Site("Fairfield, CA", "8 AM to 5 PM", 150, aerotek);

// TEKsystems

const destin = new Site("Destin, FL", "9 AM to 5 PM", 100, teksystems);
const chicago = new Site("Chicago, IL", "8 AM to 5 PM", 200, teksystems);
const bridgewater = new Site("Bridgewater, NJ", "9 AM to 6 PM", 300, teksystems);

// Aston Carter

const newark = new Site("Newark, DE", "8 AM to 5 PM", 175, astoncarter);
const louisville = new Site("Louisville, KY", "9 AM to 6 PM", 85, astoncarter);
const raleigh = new Site("Raleigh, NC", "8 AM to 4 PM", 100, astoncarter);

// Employees

const john = new Employee("John", "CEO", 500000, "555-5555", "john@allegis.com", huntsville);
const mary = new Employee("Mary", "Manager", 200000, "555-6666", "mary@allegis.com", tempe);
const david = new Employee("David", "Secretary", 50000, "555-7777", "david@allegis.com", fairfield);
const susan = new Employee("Susan", "Engineer", 100000, "555-8888", "susan@teksystems.com", destin);
const thomas = new Employee("Thomas", "Engineer", 95000, "555-9999", "thomas@aerotek.com", chicago);
const alice = new Employee("Alice", "Financial Officer", "555-4444", "alice@astoncarter.com", bridgewater);
const michael = new Employee("Michael", "Janitor", 30000, "555-3333", "michael@astoncarter.com", newark);
const lisa = new Employee("Lisa", "Marketer", 75000, "555-2222", "lisa@astoncarter.com", louisville);
const robert = new Employee("Robert", "HR Personel", 50000, "555-1111", "robert@aerotek.com", raleigh);
const brittany = new Employee("Brittany", "Lawyer", 97000, "555-0000", "brittany@teksystems.com", huntsville)
/****************************************************************************************************************************************************************************************
Bonus Exercise:

3. Building on Exercise 1, Do the following :
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...