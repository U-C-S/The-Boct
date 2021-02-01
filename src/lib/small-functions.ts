function replyRandom(strings: string[]): string {
  let x = RandomOf(0, strings.length - 1);
  return strings[x];
}

function RandomOf(m: number, n: number): number {
  return Math.floor(Math.random() * (n - m + 1)) + m;
}

export { replyRandom, RandomOf };
