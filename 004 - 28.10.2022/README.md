# *Beginner - Lost Without a Map* `8kyu`

## Task:

> Given an array of integers, return a new array with each value doubled.

## For example:

``` js
  [1, 2, 3] --> [2, 4, 6]
```


# Solution

``` js
  function maps(x) {
    let arr = [];
    for (let item of x) {
      arr.push(item * 2);
    }
    return arr;
  }
```
