function factorial(n) {
  if (n > 1) {
    return n*factorial(n-1);
  }
  else if (n >= 0) {
    return 1;
  }
  else {
    return -1;
  }
}

console.log(factorial(process.argv[2]));
