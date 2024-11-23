// 1- Create a function that accepts a User object but allows any property to be optional.
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

interface User {
    id: number;
    name: string;
    age: number;
    email: string;
}

function optionalUserProperty(user: Partial<User>) {
    console.log(user);
}

optionalUserProperty({
    name: 'Charbel',
    age: 29
})

// 2- Create a function that returns only selected properties from a Product object.
// interface Product {
//   id: number;
//   name: string;
//   description: string;
//   price: number;
// }

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
  }

  // bade a3ml selection bs la name wel price

function getBasicProductInfo (product: Pick<Product, "name" | "price">) {
  console.log(product);
}

getBasicProductInfo({
    name: 'Apple',
    price: 399
})

///////////////////////////////////////////////////////////////////////////////////////
// 3- Create a function that returns a Person object, excluding sensitive data like the socialSecurityNumber.
// interface Person {
//   name: string;
//   age: number;
//   socialSecurityNumber: string;
// }

interface Person {
    name: string;
    age: number;
    socialSecurityNumber: string;
}
type SafePerson = Omit<Person, "socialSecurityNumber">;
function getNonSensitiveData(person: Person) : SafePerson{
    return {
        name: person.name,
        age: person.age,
    }
}
const person1: Person = {
    name: "Tony Makhlouf",
    age: 25,
    socialSecurityNumber: "123-45-6789",
  };
console.log(getNonSensitiveData(person1));

/////////////////////////////////////////////////////////////////////////////
// 4- Make a Config object immutable.
// interface Config {
//   apiKey: string;
//   baseUrl: string;
//   timeout: number;
// }



interface Config {
    apiKey: string;
    baseUrl: string;
    timeout: number;
  }

  type ImmutableConfig = Readonly<Config>;
  
  const config: ImmutableConfig = {
    apiKey: "123456789",
    baseUrl: "https://api.example.com",
    timeout: 5,
  };
  
  console.log(config);

  //////////////////////////////////////////////////////
//5- Create a type that represents a dictionary where the keys are strings, and the values are numbers.
  
type StringNumberDictionary = {
    [key: string]: number;
  };
/////////////////////////
// 6- Create a type that excludes specific values from a union of string literals.
// type AvailableColors = "red" | "green" | "blue" | "yellow";  

type AvailableColors = "red" | "green" | "blue" | "yellow";
type NewColorType = Exclude<AvailableColors, "green" | "yellow">;

/////////////////////////////////////////////////////////
// 7- Create a type that extracts only certain values from a union of string literals.
// type AvailableColors = "red" | "green" | "blue" | "yellow";

type AvailableColors2 = "red" | "green" | "blue" | "yellow";
type PrimaryColors = Extract<AvailableColors2, "red" | "blue">;

//////////////////////////////////////
// 8- Create a type that removes null and undefined from a union type
// type Address = string | null | undefined;

type Address = string | null | undefined;
type ValidAddress = NonNullable<Address>;

