const map = new Map();
map.set('one', 1);
map.set('2', 'two');
if (map.has('two')) {
  console.log('two');
} else {
  console.log(map.get('one'));
}


// ####################################

let set = new Set();
set.add(5).add(9).add(59).add(9);

console.log(set.has(9));

for (let v of set.values())
    console.log(v);
