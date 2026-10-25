
// 1. Arithmetic Operators
let a = 5;
let b = 2;

console.log("----- Arithmetic Operators -----");
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % b =", a % b);
console.log("a ** b =", a ** b);

// 2. Increment and Decrement Operators
console.log("----- Increment / Decrement -----");
let x = 5;

console.log("Pre-increment =", ++x);
console.log("Post-increment =", x++);
console.log("After increment =", x);
console.log("Pre-decrement =", --x);
console.log("Post-decrement =", x--);
console.log("After decrement =", x);

// 3. Assignment Operators
console.log("----- Assignment Operators -----");
let n = 10;

n += 5;
console.log("n += 5:", n);

n -= 3;
console.log("n -= 3:", n);

n *= 2;
console.log("n *= 2:", n);

n /= 4;
console.log("n /= 4:", n);

n %= 3;
console.log("n %= 3:", n);

n **= 2;
console.log("n **= 2:", n);

// 4. Comparison Operators
console.log("----- Comparison Operators -----");
let p = 5;
let q = "5";

console.log("Equal (==):", p == q);
console.log("Strict Equal (===):", p === q);
console.log("Not Equal (!=):", p != q);
console.log("Strict Not Equal (!==):", p !== q);
console.log("Greater Than (>):", p > 3);
console.log("Less Than (<):", p < 3);
console.log("Greater or Equal (>=):", p >= 5);
console.log("Less or Equal (<=):", p <= 5);

// 5. Logical Operators
console.log("----- Logical Operators -----");
let age = 25;

console.log("AND (&&):", age >= 18 && age <= 60);
console.log("OR (||):", age < 18 || age > 60);
console.log("NOT (!):", !(age >= 18));

// 6. Bitwise Operators
console.log("----- Bitwise Operators -----");
let m = 5;
let k = 3;

console.log("AND (&):", m & k);
console.log("OR (|):", m | k);
console.log("XOR (^):", m ^ k);
console.log("NOT (~):", ~m);
console.log("Left Shift (<<):", m << 1);
console.log("Right Shift (>>):", m >> 1);
console.log("Unsigned Right Shift (>>>):", m >>> 1);

// 7. String Operator
console.log("----- String Operator -----");
let firstName = "Hello";
let secondName = " JavaScript";

console.log("Concatenation:", firstName + secondName);

// 8. Conditional (Ternary) Operator
console.log("----- Ternary Operator -----");
let marks = 75;

let result = marks >= 33 ? "Pass" : "Fail";
console.log("Result:", result);

// 9. Type Operators
console.log("----- Type Operators -----");
let value = 100;

console.log("typeof:", typeof value);
console.log("instanceof:", [] instanceof Array);

// 10. Nullish Coalescing Operator (??)
console.log("----- Nullish Coalescing -----");
let username = null;

console.log(username ?? "Guest");

// 11. Optional Chaining Operator (?.)
console.log("----- Optional Chaining -----");
let user = {};

console.log(user.address?.city);

// 12. Relational Operators: in
console.log("----- in Operator -----");
let student = { name: "Aman", age: 20 };

console.log("name" in student);
console.log("marks" in student);

// 13. Bitwise Assignment Operators
console.log("----- Bitwise Assignment -----");
let bits = 5;

bits &= 3;
console.log("bits &= 3:", bits);

bits |= 2;
console.log("bits |= 2:", bits);

bits ^= 1;
console.log("bits ^= 1:", bits);

bits <<= 1;
console.log("bits <<= 1:", bits);

bits >>= 1;
console.log("bits >>= 1:", bits);

bits >>>= 1;
console.log("bits >>>= 1:", bits);

// 14. Logical Assignment Operators
console.log("----- Logical Assignment -----");
let val1 = 0;
val1 ||= 10;
console.log("||=:", val1);

let val2 = 5;
val2 &&= 20;
console.log("&&=:", val2);

let val3 = null;
val3 ??= 30;
console.log("??=:", val3);

// 15. Comma Operator
console.log("----- Comma Operator -----");
let c = (1, 2, 3);
console.log("Comma result:", c);

// 16. Unary Operators
console.log("----- Unary Operators -----");
let num = 10;

console.log("Unary plus (+):", +"20");
console.log("Unary minus (-):", -num);
console.log("Logical NOT (!):", !true);
console.log("Bitwise NOT (~):", ~num);
console.log("Type of:", typeof num);
console.log("Void:", void 0);

// 17. Delete Operator
console.log("----- Delete Operator -----");
let employee = { name: "Rahul", age: 22 };

delete employee.age;
console.log(employee);

// 18. Spread Operator
console.log("----- Spread Operator -----");
let nums = [1, 2, 3];
let copiedNums = [...nums];

console.log(copiedNums);

// 19. Rest Operator
console.log("----- Rest Operator -----");
function addAll(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log("Rest result:", addAll(1, 2, 3, 4));

// 20. Exponentiation Assignment Operator
console.log("----- Exponentiation Assignment -----");
let power = 2;
power **= 3;

console.log("power **= 3:", power);
