# *Vowel remover* `8kyu`

## Task:

> Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

# Examples:

``` js 
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
```

 - don't worry about uppercase vowels
 - `y` is not considered a vowel for this kata

# Solution    

``` js
function shortcut (string) {
  return string.replace(/[aeiou]/gi, '');
}
```
