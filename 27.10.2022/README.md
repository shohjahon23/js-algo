# *Count of positives / sum of negatives* `8kyu`

## Task:

> Given an array of integers.

> Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

> If the input is an empty array or is null, return an empty array. 

## Example:


``` js
function removeEveryOther(arr){
  return arr.filter((item, index) => index % 2 === 0)
}
```