function scuberGreetingForFeet(ride){
  // Write your code here!
  
  if (ride<=400){
    return 'This one is on me!';
  }else if(ride>2000 && ride<=2500){
    return 'I will gladly take your thirty bucks.'
  }else if(ride>2500){
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  const result=city==="NYC"?("Ok, sounds good."):("No go.")
  return result;
}
function ternaryCheckCity(city) {
  const result = city !== "NYC" ? "No go." : "Ok, sounds good.";
  return result;
}


function switchOnCharmFromTip(tip){
let gesture;
  switch (tip){
    case "generous":gesture="Thank you so much.";
    break;
    case 'not as generous': gesture='Thank you.';
    break;
    default:
    gesture='Bye.';
  }
  return gesture;
  }
  console.log(switchOnCharmFromTip('t'));

