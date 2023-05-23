function* fibonacciGenerator() {
  [a, b] = [0, 1]
  while (true) {
    yield a;
    [a, b] = [b, a + b]
  }
}

const fib = fibonacciGenerator(15);

for (let i = 0; i < 10; i++) {
    console.log(fib.next().value)
}
