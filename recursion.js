function fatorialRecursion(n) {
  if (n === 1 || n === 0) return 1;

  return n* fatorialRecursion(n-1);
}

console.log("Fatorial: ", fatorialRecursion(5))
