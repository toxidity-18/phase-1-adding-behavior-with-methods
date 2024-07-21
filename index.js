
class Cat {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      return `${this.name} says meow!`;
    }
  }
  
 
  class Dog {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      return `${this.name} says woof!`;
    }
  }
  
  
  class Bird {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      return `It's me! ${this.name}, the parrot!`;
    }
  }
  
  class Bird2 {
    constructor(name, gender) {
      this.name = name;
      this.gender = gender;
    }
  
    speak() {
      return `${this.name} says squawk!`;
    }
  }
  
  let cat, dog, bird, bird2;
  
  describe("Cat", () => {
    beforeEach(() => {
      cat = new Cat("Sasha", "female");
    });
  
    it("has a class of Cat", () => {
      expect(new Cat()).to.be.an.instanceof(Cat);
    });
  
    it("cat.speak() returns '[name] says meow!'", () => {
      expect(cat.speak()).to.eq('Sasha says meow!');
    });
  });
  
  describe("Dog", () => {
    beforeEach(() => {
      dog = new Dog("Rufio", "male");
    });
  
    it("has a class of Dog", () => {
      expect(new Dog()).to.be.an.instanceof(Dog);
    });
  
    it("dog.speak() returns '[name] says woof!'", () => {
      expect(dog.speak()).to.eq('Rufio says woof!');
    });
  });
  
  describe("Bird", () => {
    beforeEach(() => {
      bird = new Bird("Pablo", "male");
      bird2 = new Bird("Mable", "female");
    });
  
    it("has a class of Bird", () => {
      expect(new Bird()).to.be.an.instanceof(Bird);
    });
  
    it("bird.speak() returns 'It's me! [name], the parrot!'", () => {
      expect(bird.speak()).to.eq('It\'s me! Pablo, the parrot!');
    });
  
    it("bird2.speak() returns '[name] says squawk!'", () => {
      expect(bird2.speak()).to.eq('Mable says squawk!');
    });
  });
  