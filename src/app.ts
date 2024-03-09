class Key {  
  constructor(private signature: number = Math.random()) { };
  
  getSignature(): number{
    return this.signature;
  };
};

class Person {
  constructor(private key: Key) { };
  
  getKey(): Key {
    return this.key;
  };
};

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) { };
  
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log("The pesson person got into the house");
    } else {
      throw new Error("The door is closed");
    };
  };

  public abstract openDoor(key: Key): void;
};

class MyHouse extends House { 
  public openDoor(key: Key) {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("The door is open");
    } else {
      throw new Error("The key is invalid");
    };
  };
};

const key = new Key();
const person = new Person(key);
const myHouse = new MyHouse(key);

myHouse.openDoor(key);
myHouse.comeIn(person);









