function Devinette(){
  var tentatives = 1;
  var computer = Math.floor(Math.random()*100)+1;
  while((computer != users) && (tentatives >= 1)){
    var users = prompt("entrez un nombre : tentatives restantes" + tentatives);
    if(users < computer){
      console.log("le nombre a trouvé est plus grand que " + users);
    }
    else if(users > computer){
      console.log("le nombre a trouvé est plus petit que " + users);
    }
    else{
      console.log("vous avez gagné");
      break;
    }
    tentatives--;
  }
  if(tentatives == 0){
    console.log("Vous avez perdu");
  }
}
Devinette();
