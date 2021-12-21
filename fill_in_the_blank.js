let myMap = new Map();

myMap.set('zero', 0 );

myMap.set('one', 1);

for (let [key, value] of myMap) {

  console.log(`${key} = ${value}`);

}


class Add {
    constructor(...words) {
        this.words = words;
    }
    print() {  var prn = '$';
        for (let word of this.words){
             prn = prn + word + '$';
        }
        console.log(`${prn}`);


     }
    }
  

  
  var x = new Add("hehe", "hoho", "haha", "hihi", "huhu");
  var y = new Add("this", "is", "awesome");
  var z = new Add("lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit");
  
 

  x.print();
  y.print();
  z.print();