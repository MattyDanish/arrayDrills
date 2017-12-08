function makeList(item1, item2, item3) {
 return [item1, item2, item3]
}
function testMakeList() {
  
  var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
  var result = makeList(items[0], items[1], items[2]);
  
  if (
    result && result.length && items.length === result.length &&
    items.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `makeList` works!');
  } else {
    console.error('FAILURE: `makeList` is not working');
  } 
}

testMakeList();

// drill 2 //

function addToList(list, item) {
  list.push(item)
  return list
}

function testMakeList() {
  
  var items = ["prime rib", "fried goat cheese salad", "fish tacos"];
  var result = makeList(items[0], items[1], items[2]);
  
  if (
    result && result.length && items.length === result.length &&
    items.every(function(item) {
      return result.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `makeList` works!');
  } else {
    console.error('FAILURE: `makeList` is not working');
  } 
}

testMakeList();

// drill 3 //

function accessFirstItem(array) {
  return array[0];
}

function accessThirdItem(array) {
  return array[2];
}

function testFunctionWorks(fn, input, expected) {
  
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.log(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

function runTests() {
  
  var list = [1, 4, 9, 16, 25]
  var item1 = 1
  var item2 = 9
  
  var testResults = [
    testFunctionWorks(accessFirstItem, list, item1),
    testFunctionWorks(accessThirdItem, list, item2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//drill 4//

function findLength(array) {
  return array.length;
}

function accessLastItem(array) {
  return array[array.length-1];
}

function testFunctionWorks(fn, input, expected) {
  
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.error(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  }
}

function runTests() {
  
  var list = [1, 4, 9, 16, 25];
  var originalList = [1, 4, 9, 16, 25];
  var length = 5;
  var lastItem = 25;
  
  var testResults = [
    testFunctionWorks(findLength, list, length),
    testFunctionWorks(accessLastItem, list, lastItem),
  ];
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//drill 5//

function firstFourItems(array) {
  return array.slice(0, 4);
}


function lastThreeItems(array) {
  return array.slice(-3);
}

function testFunctionWorks(fn, input, expected) {
  
  if (
    fn(input).length === expected.length &&
    fn(input).every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  } 
}

function runTests() {
  
  var list = ["red bull", "monster", "amp", "rockstar", "full throttle"];
  var result1 = ["red bull", "monster", "amp", "rockstar"];
  var result2 = ["amp", "rockstar", "full throttle"];
  
  var testResults = [
    testFunctionWorks(firstFourItems, list, result1),
    testFunctionWorks(lastThreeItems, list, result2),
  ];
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//drill 6//


function minusLastItem(array) {
  return array.slice(0, (array.length-1));
}

function copyFirstHalf(array) {
  return array.slice(0, (array.length/2));
}

function testFunctionWorks(fn, input, expected) {
  
  if (
    fn(input).length === expected.length &&
    fn(input).every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!');
    return true;
  } else {
    console.error('FAILURE: `' + fn.name + '` is not working');
    return false;
  } 
}

function runTests() {
  
  var list = ["red bull", "monster", "amp", "rockstar", "full throttle", "kickstart"];
  var result1 = ["red bull", "monster", "amp", "rockstar", "full throttle"];
  var result2 = ["red bull", "monster", "amp"];
  
  var testResults = [
    testFunctionWorks(minusLastItem, list, result1),
    testFunctionWorks(copyFirstHalf, list, result2),
  ];
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//drill 7//

function squares(array) {
  var result = array.map(function(num) {
    return num**2;
  });
  return result;
}

function testFunctionWorks(fn, input, expected) {
  
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  } 
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  } 
}

function runTests() {
  
  var input1 = [1, 2, 3, 4, 5];
  var result1 = [1, 4, 9, 16, 25];
  var input2 = [2, 4, 6, 8];
  var result2 = [4, 16, 36, 64];
  
  var testResults = [
    testFunctionWorks(squares, input1, result1),
    testFunctionWorks(squares, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//drill 8//

function greatestToLeast(array) {
  return array.sort(function(a,b) {
    return b-a;
  });
}

function testFunctionWorks(fn, input, expected) {
  var result = fn(input);
  if (
    result &&
    result.length === expected.length &&
    result.every(function(item, index) {
    return (index === 0 || result[index] result[index-1]);
    }) &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  }
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  }
}

function runTests() {
  
  var input1 = [10, 3, 5, 22, 19];
  var result1 = [22, 19, 10, 5, 3];
  var input2 = [2, 4, 6, 8];
  var result2 = [8, 6, 4, 2];
  
  var testResults = [
    testFunctionWorks(greatestToLeast, input1, result1),
    testFunctionWorks(greatestToLeast, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//drill 9//

function shortWords(array) {
  return array.filter(function(word) {
    return word.length 5;
  });
}

function testFunctionWorks(fn, input, expected) {
  
  var result = fn(input);
  if (
    result && result.length === expected.length &&
    result.every(function(item) {
      return expected.indexOf(item) > -1;
    })) {
    console.log('SUCCESS: `' + fn.name + '` works!')
    return true;
  } 
  else {
    console.error('FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input))
    return false;
  } 
}

function runTests() {
  
  var input1 = ['cat', 'oblivion', 'dog', 'patriarchy', 'blue'];
  var result1 = ['cat', 'dog', 'blue'];
  var input2 = ['rainbow', 'the', 'big'];
  var result2 = ['the', 'big'];
  
  var testResults = [
    testFunctionWorks(shortWords, input1, result1),
    testFunctionWorks(shortWords, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

//drill 10//

function divisibleBy5(array) {
  return array.find(function(num) {
    return num % 5 === 0;
  });
}

function testFunctionWorks(fn, input, expected) {
  
  if (fn(input) === expected) {
    console.log('SUCCESS: `' + fn.name + '` works on `[' + input + ']`');
    return true;
  }
  else {
    console.error(
      'FAILURE: `' + fn.name + '([' + input + '])` should be ' + expected +
      ' but was ' + fn(input)
    );
    return false;
  } 
}

function runTests() {
  
  var input1 = [13, 22, 4, 47, 15, 35, 82];
  var result1 = 15;
  var input2 = [25, 20, 15, 10, 5];
  var result2 = 25;
  
  var testResults = [
    testFunctionWorks(divisibleBy5, input1, result1),
    testFunctionWorks(divisibleBy5, input2, result2),
  ];
  
  
  
  var numPassing = testResults.filter(function(result){ return result; }).length;
  console.log(numPassing + ' out of ' + testResults.length + ' tests passing.');
}

runTests();

