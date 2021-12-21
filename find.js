const arr = ['3', '5', '8'];
console.log(
  arr.find(x => x == 8).repeat(2)
);

const arr1 = [1,2,3];
const arr2 = [5,6,7,8];
let arr3 = [...arr1, 4, ...arr2 ];
console.log(arr3)

console.log('############################')

const arr11 = [1, 2, 3, 4, 5];
const arr22 = [...arr11, 6];
const func = (...rest) => {
  console.log(rest.length);
}
func(...arr11);
func(...arr22);

const square = num => num * num;
console.log(square(6) + 6);