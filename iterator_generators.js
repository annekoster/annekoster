let myIterableObj = { 
    [Symbol.iterator] : function* () {
      yield 1; yield 2; yield 3;
    }
  };
  console.log([...myIterableObj]); // [ 1, 2, 3 ]


  // ##############

  function* idMaker() {
    let index = 0;
    while (index < 10)
      yield index++;
  }
  var gen = idMaker();
  
//   for (let g of gen)
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
    console.log(gen.next().value);
 
  // Try to add one more console.log, just like the above see what happens.

//   for (let v of set.values())
//   console.log(v);

// #########################################################################################

