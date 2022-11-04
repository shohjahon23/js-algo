# *Find the Remainder* `8kyu`

## Task:

> Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

> Division by zero should return NaN.

## Examples:

``` js
n = 17
m = 5
result = 2 (remainder of `17 / 5`)

n = 13
m = 72
result = 7 (remainder of `72 / 13`)

n = 0
m = -1
result = 0 (remainder of `0 / -1`)

n = 0
m = 1
result - division by zero (refer to the specifications on how to handle this in your language)
```
# *Solution*

``` js
function remainder(n, m){
  // Divide the larger argument by the smaller argument and return the remainder
  let min = Math.min(n, m)
  let max = Math.max(n, m)
  
  return max % min
}
```