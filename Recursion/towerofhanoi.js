function towerofhanoi(n, from, aux, to) {
  //console.log(n + " " + from + " " + aux + " " + to);
  var ctr=0;
  if(n==1) {
    console.log("move disc from "+from+" to "+to);
    return ++ctr;
  }

  ctr += towerofhanoi(n-1, from, to, aux);
  console.log("move disc from "+from+" to "+to);
  ctr += towerofhanoi(n-1, aux, from, to);

  return ++ctr;
}

if(process.argv[2]<3){
  console.log("Invalid number of towers");
}
else{
  console.log("Number of steps="+towerofhanoi(process.argv[2], 'a','b','c'));
}
