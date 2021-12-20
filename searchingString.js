console.log("SoloLearn".indexOf("Solo") === 0); // true
console.log("SoloLearn".indexOf("Solo") === (4 - "Solo".length)); // true
console.log("SoloLearn".indexOf("loLe") !== -1); // true
console.log("SoloLearn".indexOf("olo", 1) !== -1); // true
console.log("SoloLearn".indexOf("olo", 2) !== -1); // false

console.log("SoloLearn".startsWith("Solo", 0)); // true
console.log("SoloLearn".endsWith("Solo", 4)); // true
console.log("SoloLearn".includes("loLe")); // true
console.log("SoloLearn".includes("olo", 1)); // true
console.log("SoloLearn".includes("olo", 2)); // false


// oude refactor
console.log(Array(3 + 1).join("foo"));
// nieuwe refactor
console.log("foo".repeat(3));

console.log("SoloLearn".startsWith("Solo", 0)); // true
console.log("SoloLearn".endsWith("Solo", 4)); // true
console.log("SoloLearn".includes("loLe")); // true
console.log("SoloLearn".includes("olo", 1)); // true
console.log("SoloLearn".includes("olo", 2)); // false
