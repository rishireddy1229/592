//arrow function
console.log("fat arrow")
const add = (a, b) => a + b;
console.log(add(2, 3)); // Output: 5

//array destructuring
console.log("array destructuring")
const numbers = [1, 2, 3, 4, 5];
const [first, second, , fourth] = numbers;
console.log(first);  
console.log(second); 
console.log(fourth); 

// object destructuring
console.log("object destructuring")
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
  };
  
  const { name, age, city } = person;
  console.log(name); 
  console.log(age);  
  console.log(city); 

  //function generators
  console.log("function generators")
  function* countUp() {
    let count = 0;
    while (true) {
      yield count;
      count++;
    }
  }
  const counter = countUp();
  console.log(counter.next().value); // Output: 0
  console.log(counter.next().value); // Output: 1
  console.log(counter.next().value); // Output: 2
  
  console.log("fibonacci series")
  function* fibonacci() {
    let current = 0;
    let next = 1;
    
    while (true) {
      yield current;
      [current, next] = [next, current + next];
    }
  }
  
  const fibonacciGenerator = fibonacci();
  
  console.log(fibonacciGenerator.next().value); // Output: 0
  console.log(fibonacciGenerator.next().value); // Output: 1
  console.log(fibonacciGenerator.next().value); // Output: 1
  console.log(fibonacciGenerator.next().value); // Output: 2
  console.log(fibonacciGenerator.next().value); // Output: 3
  // Continues generating the Fibonacci sequence...