<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details>
<summary><b>-A</b></summary><p>

#### Answer: ?

<i>It stores an empty object so locking the console.log will return the empty object</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>-C</b></summary><p>

#### Answer: ?

<i>Addition or console.log()l returns strings and numbers, not addition like normal numbers.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>-A</b></summary>
<p>

#### Answer: ?

<i>Arrays and objects are JavaScript reference types when the value of info.favoriteFood is changed to "🍝". The change then does not affect the original food array. But when an array element is assigned to a variable or property, it creates a copy of the value, not a reference to the original array element.
So when logging the food array to the console, it will remain unchanged</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>-B</b></summary>
<p>

#### Answer: ?

<i>The sayHi function has no argument value so it will return undefined and return hi as a string so it will return hi and console will show "Hi there and undefined".</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>-C</b></summary>
<p>

#### Answer: ?

<i>The forEach method is used to iterate over the elements of an array. The forEach callback function contains an if statement to test whether the inner element number is true (ie not equal to 0). If the number is true, the count will be incremented by 1. So, forEach will look at all, each counting 3 and more than three zeros, and the last index will count 3.</i>

</p>
</details>
