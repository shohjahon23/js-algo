# *Removing Elements* `8kyu`

## Task:

> Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.put is an empty array or is null, return an empty array. 

## Example:

``` js
  ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]
```

> None of the arrays will be empty, so you don't have to worry about that!

# *Solution*

``` js
  function removeEveryOther(arr){
    return arr.filter((item, index) => index % 2 === 0)
  }
```

