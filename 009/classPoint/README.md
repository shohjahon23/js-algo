# *How good are you really?* `8kyu`

## Task:

> There was a test in your class and you passed it. Congratulations!
> But you're an ambitious person. You want to know if you're better than the average student in your class.

> You receive an array with your peers' test scores. Now calculate the average and compare your score!

> Return `True` if you're better, else `False`!

# Note:

> Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

# Solutions    

===== first way ===== 

``` js
function betterThanAverage(classPoints, yourPoints) {
  let result = 0
  
  for(let item of classPoints){
    result += item
  }
  var classPoint = result / classPoints.length

  return classPoint < yourPoints ? true : false
}
```
===== second way ===== 

``` js
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b) / classPoints.length
}
```
