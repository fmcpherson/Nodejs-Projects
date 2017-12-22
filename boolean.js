var isValid = false;

function toggleBoolean(booleanIn){
  //if boolean then flip otherwise do nothing
  if(typeof(booleanIn) === "boolean"){
    return !booleanIn;
  } else{
    console.log ("Not a boolean");
  }
}

console.log("isValid = " + isValid);
isValid = toggleBoolean(false);
console.log("isValid = " + isValid);

toggleBoolean("word");
