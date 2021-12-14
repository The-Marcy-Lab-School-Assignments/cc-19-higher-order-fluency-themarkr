# Code Challenge: Control Flow

## Instructions

1. Clone down this assignment to your `code-challenges' directory in AWS Cloud9.  
2. Code your solution using JavaScript in `index.js`. 
3. **Be sure to run and test your code throughly!**
4. By the end of Code Challenge, **commit and push your changes up to Github**.
5. Using the browser, verify that your solution is in your remote repo on Github.

## Code Problems

**All the following problems can be solved using a higher order array method. You cannot use .forEach() to solve the following problems.** 

**Test all your solutions for questions 1-5 with the following variable:** 

```jsx
const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:22}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:21}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:21},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:21}]
```

1. Write a function named `averageAge` that takes an array of objects and returns the average of all the ages from each age property in each object rounded to the nearest whole number. 
    
    ```jsx
    averageAge(alumni) // 21
    ```
2. Write a function named /`bananaBread` that takes an array of objects and returns an array of the same objects with a new property named bananaBread that has a value of a string using the name and job properties of each object. 
    
    ```jsx
    bananaBread(alumni) // returns [
      {
        name: 'Jarrit',
        job: 'TPT',
        language: 'JavaScript',
        age: 22,
        bananaBread: 'Jarrit got banana bread at TPT'
      },
      {
        name: 'Stephanie',
        job: 'JPMorgan',
        language: 'JavaScript',
        age: 21,
        bananaBread: 'Stephanie got banana bread at JPMorgan'
      }...] 
    ```
 3. Write a function named `ninetiesBabies` that takes an array of objects and returns an array of only the objects where the age property is larger than 21.
    
    ```jsx
    ninetiesBabies(alumni) // returns [
      { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 22 },
      { name: 'Devonte', job: 'WW', language: 'JavaScript', age: 23 },
      { name: 'Shemar', job: 'SquareSpace', language: 'JavaScript', age: 23 }
    ]
    ```
4. Write a function named `addSchool` that takes an array of objects and returns a new array where a property of 'school', and value of 'The Marcy Lab School' is added to each object.
    
    ```jsx
    addSchool(alumni) // returns [
      { name: 'Jarrit', job: 'TPT', language: 'JavaScript', age: 22, school: 'The Marcy Lab School'},
      { name: 'Stephanie', job:'JPMorgan', language:'JavaScript', age:21, school: 'The Marcy Lab School'}, 
      { name: 'Devonte', job:'WW', language:'JavaScript', age:23, school: 'The Marcy Lab School'}, 
      ...
    ]
    ```
 5. Write a function named `allUseJavaScript` that takes an array of objects and returns a boolean if for every object, the language property is 'JavaScript'.
    
    ```jsx
    allUseJavaScript(alumni) // returns true
    ```

**Test all your solutions for questions 6-10 with the following variable:** 

` const animals =['cheetah','dog', 'cat', 'dodobird', 'bear', 'dolphin'] `
    
6. Write a function named `noVowel` that takes an array of strings and returns an array of strings where all of the vowels have been turned into an x. 
    
    ```jsx
    noVowel(animals) // ['chxxtxh', 'dxg', 'cxt', 'dxdxbxrd', 'bxxr','dxlphxn']
    ```
    
7. Write a function named `onlyVowelA` that takes an array of strings and only returns the strings that contain the vowel a. 
    
    ```jsx
    onlyVowelA(animals) // ['cheetah', 'cat','bear']
    ```
    
8. Write a function named `longerThanSeven` that takes an array of strings and returns true if at least one of the strings in the array has a length longer than 7. 
    
    ```jsx
    longerThanSeven(animals) // true 
    ```
    
9. Write a function named `allFour` that takes an array of strings and returns true if all of the strings are a length of 4. 
    
    ```jsx
    allFour(animals) // false
    ```
    
10. Write a function named `concatStrings` that takes an array of words and returns a sentence (single string) with all the element strings concatenated together
    
    ```jsx
    concatStrings(animals) // "cheetah dog cat dodobird bear dolphin"
    ```
