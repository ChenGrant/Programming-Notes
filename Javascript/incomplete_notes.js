/*
*******************************************************************************
STYLE GUIDE
*/

// 80 is the maximum number of characters in a line

// File names must be all lowercase and may include underscores (_) or dashes
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

// React Components are widely declared with Pascal Case
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
VARIABLES
*/
    # variables can change data types
    # single and double quotes are the same