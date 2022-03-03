/*
*******************************************************************************
STYLE GUIDE
*/

  // 80 should be the maximum number of characters in a line

  // File names should be all lowercase and may include underscores (_) or dashes
  // (-), but no additional punctuation. Follow the convention that your project
  // uses. Filenames’ extension must be .js.
  my_module.js;

  // variables should be declared with a camelCase variable name with a leading
  // lowercase character
  var age = 3;
  var firstName = "grant";

  // the constant identifiers are in uppercase
  const GRAVITATIONAL_ACCELERATION = 9.81;

  // functions are written in camel case. In addition, it's a best practice to
  // tell what the function is doing by giving the function name a verb as prefix.
  function getName(firstName, lastName) {
    return `${firstName} ${lastName}`;
  }

  // classes are declared with a PascalCase
  class SoftwareDeveloper {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  // React Components are widely declared with PascalCase
  function UserProfile(user) {
    return (
      <div>
        <span>First Name: {user.firstName}</span>
        <span>Last Name: {user.lastName}</span>
      </div>
    );
  }



/*
*******************************************************************************
ADDING JS FILE TO HTML
*/

  // script tags can be placed in both header or body
  // many js files can be added to one HTML file
  // external js files can be referenced with a full URL

  <!DOCTYPE html> 
  <html lang="en" dir="ltr"> 
    <head>
      <meta charset="utf-8">
      <title></title> 
    </head>
    <body>
      <p id = 'demo'></p>
      <script src="https://www.w3schools.com/js/myScript.js"></script>
      <script src = 'script2.js'></script> 
    </body> 
  </html>


/*
*******************************************************************************
VARIABLES
*/

  // var
    // Scope 
      // var declarations have function scope. If var variables are not declared 
      // within a function, then it has global scope. In other words, this means 
      // that any variable that is declared with var outside a function block is 
      // available for use in the whole window.
      
      var x = "hi1";
      function f() {
        var y = "hi2";
        var x = 'hi3';
        console.log(x); // prints hi3
      }
      f(); 
      console.log(x); // prints 'hi1'
      console.log(y); // error: y is not defined

    // Re-Declaration and Updating
      // var variables can be re-declared and updated
      var x = 'hi1';
      var x = 'hi2';
      x = 'hi3';
      // no error raised since var variables can be re-declared and updated

      var y = 'y'
      if (true) {
        y = 'l'; // changes the value of y from 'y' to 'l'
      }
      console.log(y); //prints 'l'

    // Hoisting
      // Hoisting is a JavaScript mechanism where variables and function 
      // declarations are moved to the top of their scope before code execution
      console.log(var1); // prints undefined, no error is raised
      var var1 = "say hello";

      // the above 2 lines are the same as the below two lines
      var var1;
      console.log(var1);
      var1 = "say hello";
  


  // let
    // Scope 
      // let is now preferred for variable declaration.
      // let declarations have block scope.
      // When using let, you don't have to worry about if you have used a name 
      // for a variable before since a variable exists only within its scope. 
      // This fact makes let a better choice than var.
      // Shadowing exists. 
      let v = "hi"
      if(True){
        let v = "hi2" // example of shadowing
        console.log(v); // prints "hi2"
        let hello = 'hello'; 
        console.log(hello); //prints hello
      }
      console.log(v); // prints "hi"
      console.log(hello); //returns error since hello is not defined

    // Re-Declaration and Updating
      // let can be updated but not re-declared
      let v= "1";
      v = "2"; //no error
      let v = "3"; //error since you cannot re-declare

    //Hoisting
      // let declarations are hoisted to the top. 
      // Unlike var which is initialized as undefined, the let keyword is not
      // initialized. So if you try to use a let variable before declaration, 
      // you'll get a Reference Error



  // const
    // Scope 
      // const definitions have block scope.
      // Shadowing exists.
      const z = 3;
      {
        const z = 5; // Allowed 
        z = 6; // Not Allowed
      }  

    // Re-Declaration and Updating
      // you can NOT:
        // Reassign a constant value
        // Reassign a constant array
        // Reassign a constant object
      // you can: 
        // Change the elements of constant array
        // Change the properties of constant object

      const PI = 3.141592653589793;
      PI = 3.14;      // This will give an error
      const PI = 3;   // This will also give an error

      // const variables must be assigned a value when they are declared:
        const PI; // error
        PI = 3.14159265359;
      
      // Constant Arrays
        // You can create a constant array:
        const cars = ["Saab", "Volvo", "BMW"];

        // You can change an element:
        cars[0] = "Toyota";

        // You can add an element:
        cars.push("Audi");

        // You CANNOT reassign the array:
        const cars = ["Saab", "Volvo", "BMW"];
        cars = ["Toyota", "Volvo", "Audi"];    // ERROR
      
      // Constant Objects
        // You can create a const object:
        const car = {type:"Fiat", model:"500", color:"white"};

        // You can change a property:
        car.color = "red";

        // You can add a property:
        car.owner = "Johnson";

        // You CANNOT reassign the object:
        const car = {type:"Fiat", model:"500", color:"white"};
        car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

    //Hoisting
      // const declarations are hoisted to the top. 
      // Unlike var which is initialized as undefined, the const keyword is not
      // initialized. So if you try to use a const variable before declaration, 
      // you'll get a Reference Error



  // Given the right scope, variables can change between var, let, const
    var x = 2;     // Allowed
    const x = 2;   // Not allowed

    {
    let x = 2;     // Allowed
    const x = 2;   // Not allowed
    }

    {
    const x = 2;   // Allowed
    const x = 2;   // Not allowed
    }







    # variables can change data types
    # single and double quotes are the same
    JavaScript does not strictly require semicolons. When there is a place where a semicolon was needed, it adds it behind the scenes. The process that does this is called Automatic Semicolon Insertion. Just use semicolons to be safe