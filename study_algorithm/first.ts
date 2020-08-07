class first {
  private sum: number;

  constructor() {
    this.sum = 0;
  }

  result(num: number): number {

    num.
    const strNumber = num.toString();
    const first = Number(strNumber.charAt(0));
    const second = parseInt(strNumber.charAt(1));
    const third = parseInt(strNumber.charAt(2));

    console.log(`strNumber: ${strNumber}`);
    console.log(`first : ${first}`);
    console.log(`second : ${second}`);
    console.log(`third : ${third}`);

    console.log(`num : ${num % 10}`);
    console.log(`sum: ${this.sum}`);

    for(num in )

    while (num > 10) {
      this.sum += num % 10;
      num = num / 10;
    }
    return this.sum;
  }
}

const sumResult = new first().result(234);
console.log(`Result : ${sumResult}`);
