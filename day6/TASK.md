# GUVI Day 6 Task Submission

## Question 1.

### Find the culprit

```html
fix.html

<!DOCTYPE html>
<html>
  <body>
    <script>
      alert("I’m JavaScript!');
    </script>
    Whats the error in this ?
  </body>
</html>
```

## Solution 1.

### The text `"I'm JavaScript'` is not enclosed in quotes properly. On the left side it is enclosed by double quotes " while on the right it is enclosed in single quotes '

### The solution is to remove the single quotes from the right side and replace it with double quotes "

```html
fix.html

<!DOCTYPE html>
<html>
  <body>
    <script>
      alert("I’m JavaScript!");
    </script>
    Whats the error in this ?
  </body>
</html>
```

---

## Question 2.

### Find the culprit and invoke the alert

```html
fix.html

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```js
scripts.js

alert("I’m invoked!");
```

## Solution 2.

### There is a mismatch in file name of javascript and the source of the file name in html src attribute.

### The solution is to either change the name of the javascript file to script.js or to change the src attribute to scripts.js

```html
fix.html

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```js
script.js

alert("I’m invoked!");
```

---

## Question 3.

### Explain the below how it works

```html
explain.html

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```js
script.js;

alert("I'm JavaScript!");
alert('Hello') // this line is not having semicolon
alert(`Wor
 ld`);
alert(3 + 
1 
+ 2); // this is multiple line code and its working
```

## Solution 3.

### In JavaScript `;` is not a compulsory character for the end of every statement. So we can write code statements of JavaScript without `;`

### Multiline statements will also work since we have used back tick` `` ` character.

### Multiline code will also work if it is a valid expression in JavaScript.
---

## Question 4.

### Fix the below to alert Guvi geek

```html
fix.html

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```js
script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+lname;
alert(admin); // "Guvi geek"
```

## Solution 4.

### We need to give a space between Guvi and geek

```js
script.js

let admin=9, fname=10.5; 
fname = "Guvi";
lname = "geek"
admin = fname+ " " +lname;
alert(admin); // "Guvi geek"
```
---

## Question 5.

### Fix the below to alert hello Guvi geek

```html
fix.html

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```js
script.js

let fname=10.5; 
fname = "Guvi";
lname = "geek"
let name = fname+lname;
alert('hello ${name}');
```

## Solution 5.

### We need to give a space in the end of `fname = "Guvi "` and write `hello ${name}` in between back ticks ` `` ` and NOT in between single quotes`'`

```js
script.js

let fname=10.5; 
fname = "Guvi ";
lname = "geek"
let name = fname+lname;
alert(`hello ${name}`);
```
---

## Question 6.

### Fix the below to alert the sum of two numbers

```html
fix.html

<!DOCTYPE html>
<html>
  <body>
    <script src="script.js"></script>
  </body>
</html>
```

```js
script.js

let a = prompt("First number?");
let b = prompt("Second number?");
alert(a + b);
```

## Solution 6.

### The input form of `alert()` is String, so we first need to convert the input to an number using `Number()`

```js
script.js

let a = Number(prompt("First number?"));
let b = Number(prompt("Second number?"));
alert(a + b);
```
---
