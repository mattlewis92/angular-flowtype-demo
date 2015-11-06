class ExampleService {

  sampleMethod(x: number) : string {

    const THRESHOLD = 10;

    if (x < THRESHOLD) {
      return `${x} is less than ${THRESHOLD}`;
    } else {
      return `${x} is greater than ${THRESHOLD}`;
    }

  }

  yetAnotherMethod() : boolean {
    return true;
  }

}

export default ExampleService;