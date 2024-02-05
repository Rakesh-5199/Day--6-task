class Person {
    constructor(firstName, lastName, age, gender) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
    }
  
    introduce() {
      console.log(`Hello, my name is ${this.firstName} ${this.lastName}. I am ${this.age} years old and identify as ${this.gender}.`);
    }
  }
  
  const johnDoe = new Person('John', 'Doe', 30, 'Male');
  johnDoe.introduce();
  
  