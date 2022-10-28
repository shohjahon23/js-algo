# *Count Odd Numbers below n*

Given a number n, return the number of positive odd numbers below n!!!

## Examples (Input -> Output)
``` js
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
```

Expect large Inputs!

# *Solution*

``` js
function oddCount(n){
  return Math.floor(n/2);
}
```