# *Count Odd Numbers below n* `8kyu`

Given a number n, return the number of positive odd numbers below n!!!

## Examples (Input -> Output)
``` js
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
```

Expect large Inputs!

# *Solutions*

// ======== first way ========
``` js
function oddCount(n){
  return Math.floor(n/2);
}
```

// ======== second way ========
``` js
let i = 1
let arr = []
function oddCount(n){
    for(i; i < n; i = i + 2){
        arr.push(i)
    }
}
```