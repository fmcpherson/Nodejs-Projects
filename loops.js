// countDownWhile(startingPoint, stoppingPoint)
function countDownWhile(startingPoint, stoppingPoint){
  var i = startingPoint;

  while (i >= stoppingPoint){
    console.log('while: ' + i);
    i--;
  }
}

// countDownFor
function countDownFor(startingPoint, stoppingPoint){
  for (i=startingPoint; i >= stoppingPoint; i--){
    console.log('for: ' + i);
  }
}

countDownWhile(10, 5);
countDownFor(10, 2);
