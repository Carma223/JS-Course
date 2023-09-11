// Only change code below this line
class Vegetable{
    constructor(name){
      this.name = name;
    }
    notNecessaryFunction(){
      console.log("This is how you declare a function inside a class!")
    }
  }
  // Only change code above this line
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Should display 'carrot'