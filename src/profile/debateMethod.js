export function thisUsersTurn(currentDebate, email) {
  var nextDebate; // number, 1 for first, 2 for second etc
  if(currentDebate.firstVideoLink === ''){
    nextDebate = 1;
  }
  else if (currentDebate.secondVideoLink === ''){
    nextDebate = 2;
  }
  else if (currentDebate.thirdVideoLink === ''){
    nextDebate = 3;
  }
  else {
    nextDebate = 4;
  }
  console.log(nextDebate)
  console.log("figuring out next debate^ ")
  var thisUsersTurn = false;
  console.log(email);
  if (email === currentDebate.personAcceptedFirst && nextDebate % 2 ===1){
    thisUsersTurn = true
  }
  else if(email !== currentDebate.personAcceptedFirst && nextDebate %2 ===0){
    thisUsersTurn =true;
  }

  return thisUsersTurn
}

export function getDebateRound(currentDebate) {
  if(currentDebate.firstVideoLink === ''){
    return 1;
  }
  else if (currentDebate.secondVideoLink === ''){
    return 2;
  }
  else if (currentDebate.thirdVideoLink === ''){
    return 3;
  }
  else {
    return 4;
  }
}
