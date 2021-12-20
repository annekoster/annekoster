let map = new Map([['k1', 'v1', 't1'], ['k2', 'v2','t2'], ['k3', 'v3', 't3']]);

map.set('k4', 'v4', 't4').set ('k5', 'v5', 't5');

console.log(map.size); // 3

console.log(map.get('k1')); // v1
console.log(map.has('k2')); // true
console.log(map.has('k3'));

for (let kv of map.entries())
    console.log(kv[0] + " : " + kv[1] + " : " + kv[2]);


console.log(map.keys('k3'));
console.log(map.values('v3'));
console.log(map.values('k3'));
console.log(map.entries('k3'));