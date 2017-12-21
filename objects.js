var person = {};

person.firstName = 'Frank';
person.lastName = 'McPherson';
person.age = 51;

delete person.age;

console.log(person);

function greetUser (person){
	console.log('Hello ' + person.firstName + " " + person.lastName);
}

greetUser(person);
