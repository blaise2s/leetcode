export const romanToInt = (s: string) => {
  let result = 0;
  let previousVal = 0;
  const romanVals = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  for (let i = s.length - 1; i > -1; i--) {
    const currentVal = romanVals.get(s[i])!;
    if (currentVal < previousVal) {
      result -= currentVal;
    } else {
      result += currentVal;
    }
    previousVal = currentVal;
  }
  return result;
};
