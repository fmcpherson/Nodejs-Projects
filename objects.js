var person = {};

person.firstName = 'Frank';
person.lastName = 'McPherson';

function greetUser (person){
	console.log('Hello ' + person.firstName + " " + person.lastName);
}

greetUser(person);
