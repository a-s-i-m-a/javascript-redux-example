export function errorLogger(error) {
  if (error instanceof TypeError) {
    console.error('TypeError: ', error);
  } else if (error instanceof RangeError) {
    console.error('RangeError: ', error);
  } else if (error instanceof EvalError) {
    console.error('EvalError: ', error);
  } else {
    const { data } = error;
    console.log(`${data.error}: ${data.message}`);
  }
}
