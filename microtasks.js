// 1- Create a function that accepts a User object but allows any property to be optional.
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }
function optionalUserProperty(user) {
    console.log(user);
}
optionalUserProperty({
    name: 'Charbel',
    age: 29
});
// bade a3ml selection bs la name wel price
function getBasicProductInfo(product) {
    console.log(product);
}
getBasicProductInfo({
    name: 'Apple',
    price: 399
});
function getNonSensitiveData(person) {
    return {
        name: person.name,
        age: person.age,
    };
}
var person1 = {
    name: "Tony Makhlouf",
    age: 25,
    socialSecurityNumber: "123-45-6789",
};
console.log(getNonSensitiveData(person1));
var config = {
    apiKey: "123456789",
    baseUrl: "https://api.example.com",
    timeout: 5,
};
console.log(config);
