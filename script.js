class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Getter for age
  get age() {
    return this._age;
  }

  // Method to greet
  greet() {
    console.log(`Hello, my name is ${this._name}, I am ${this._age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age); // call parent constructor
    this._jobTitle = jobTitle;
  }

  // Getter for jobTitle
  get jobTitle() {
    return this._jobTitle;
  }

  // Method to greet with job title
  jobGreet() {
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
    );
  }
}

// Expose globally for Cypress
window.Person = Person;
window.Employee = Employee;