# *Twice as old* `8kyu`

## Task:

> Your function takes two arguments:

1. current father's age (years)
2. current age of his son (years)

> Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

# Solution

``` js
function twiceAsOld(dadYearsOld, sonYearsOld) {
    let twice = dadYearsOld - sonYearsOld * 2;
    return twice < 0 ? twice * (-1) : twice;
}
```

