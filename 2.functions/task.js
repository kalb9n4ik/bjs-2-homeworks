function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;
  for (const arg of arr) {

    if (arg < min) {
      min = arg;
    }

    if (arg > max) {
      max = arg;
    }

    sum += arg
  }

  avg = sum / arr.length;
  avg = Number(avg.toFixed(2));

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );

  return sumWithInitial;
}

function differenceMaxMinWorker(...arr) {
  let differenceMaxMin = 0;

   if (arr.length > 1) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    differenceMaxMin = max - min;
   }

  return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let differenceEvenOdd = 0;
  if (arr.length > 1) {
    for (const arg of arr) {
      if (arg % 2 === 0) {
        sumEvenElement += arg;
      } else {
        sumOddElement += arg;
      }
    }
    differenceEvenOdd = sumEvenElement - sumOddElement;
  }
  
  return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let averageEvenElements = 0;

  if (arr.length > 0) {
    for (const arg of arr) {
      if (arg % 2 === 0) {
        sumEvenElement += arg;
        countEvenElement++;
      } 
    }
   averageEvenElements = sumEvenElement / countEvenElement;
  }
  
  return averageEvenElements;

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;

  for (const arg of arrOfArr) {
    const maxReturn = func(...arg);
    if (maxReturn > maxWorkerResult) {
      maxWorkerResult = maxReturn;
    }
  }
  return maxWorkerResult;
}
