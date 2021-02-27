
exports.min = function min (array) {
  if (array !== undefined && array.length > 0) {
    let result = array.reduce((acc, currentNum) => {
      if (currentNum < acc) {
        acc = currentNum;
      }
      return acc;
    });
  
    return result;
  } else {
    return 0;
  }
}

exports.max = function max (array) {
  if (array !== undefined && array.length > 0) {
    let result = array.reduce((acc, currentNum) => {
      if (currentNum > acc) {
        acc = currentNum;
      }
      return acc;
    });
  
    return result;
  } else {
    return 0;
  }
}

exports.avg = function avg (array) {
  if (array !== undefined && array.length > 0) {
    let result = array.reduce((acc, currentNum) => {
      return acc += currentNum;
    });
    return result / array.length;
  } else {
    return 0;
  }
}