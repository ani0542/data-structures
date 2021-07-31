function allbinarycombinations(n, arr, k) {

  if(n==0){
    console.log(arr);
    return;
  }
  // arr[n-1]=0;
  // allbinarycombinations(n-1, arr);
  // arr[n-1]=1;
  // allbinarycombinations(n-1, arr);
  for(var j=0;j<k;j++){
    arr[n-1]=j;
    allbinarycombinations(n-1, arr, k);
  }
}

if(process.argv[2]<1) {
  console.log("invalid input");
}
else {
  allbinarycombinations(process.argv[2], [], process.argv[3]);
}
