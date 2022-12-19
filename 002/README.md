# *Count of positives / sum of negatives* `8kyu`

## Task:

> Given an array of integers.

> Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

> If the input is an empty array or is null, return an empty array. 

## Example:

``` js
  For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
```

# *Solution*

``` js
  function countPositivesSumNegatives(input) {
    if (input == null) {
      return [];
    } else if (input.length == []) {
      return [];
    } else {
      let positiveArr = [];
      let negativeArr = [];

      for (let item of input) {
        if (item < 0) {
          negativeArr.push(item);
        } else if (item > 0) {
          positiveArr.push(item);
        }
      }
      let positiveNum = positiveArr.length;
      let negativeNum = 0;

      for (let item of negativeArr) {
        negativeNum += item;
      }
      return [positiveNum, negativeNum];
    }
  }

  console.log(countPositivesSumNegatives([1, -2, 3, -4, 5]));
```

