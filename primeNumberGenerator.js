function* primeNumberGenerator(limit) {

    for (let i = 1; i <= limit; i++) {
        for (let j = 2; j <= i; j++) {
          if (i % j === 0 && j < i) {
            break;
          } else if (j === i) {
            console.log(i)
            yield i;
          }
        }
      }
}

const prime = primeNumberGenerator(100)

while (prime.next().value) {
    console.log(prime.next().value)
}
