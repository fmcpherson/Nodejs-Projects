var age = 24; //global

function localFunction(){
  var age = 0;

  age = 0;
}


localFunction();
console.log(age);
