//ES5

// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

//filterOutOdds ES2015

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);


//findMin ES2015

const findMin = (...nums) => nums.reduce((min, curVal) => curVal < min ? curVal:min);


//mergeObjects ES2015

const mergeObjects = (x,y) => ({...x, ...y})


//doubleAndReturnArgs ES2015

const doubleAndReturnArgs = (arr, ...nums) => ([...arr, ...nums.map(num => num*2 )]);



//removeRandom ES2015

const removeRandom = (...items) => {items.splice(Math.floor(Math.random()*items.length),1);return items};


//extend ES2015

const extend = (array1, array2) => [...array1,...array2];


//addKeyVal ES2015

const addKeyVal = (obj,key,val) => {const newObj = {...obj};newObj[key] = val;return newObj}


//removKey ES2015

const removeKey = (obj,key) => {const newObj = {...obj};delete newObj[key];return newObj}


//combine ES2015

const combine = (obj1 ,obj2) => ({...obj1, ...obj2});


//update ES2015

const update = (obj,key,val) => {const newObj = {...obj};newObj[key] = val;return newObj};