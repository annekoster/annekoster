class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + " makes a noise");
  }
}
}
class Dog extends Animal {
    speak();
     super.speak();                 //Super!
        bark() {;
        console.log(this.name + " barks.");
        };
        wag() {
        console.log(this.name + " wags it`s tail.");
        }
        lol() {
        console.log(this.name + " is always having fun.");
        }
}

let d = new Dog("Rex");
let e = new Dog("Wendy");
let f = new Dog("Bjorn");

d.bark();
e.wag();
f.lol();
