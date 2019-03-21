/*
 * Differences between destructuring an object and destructuring an array
 * 
 1. In Array destructuring we can skip assignment using comma(,), But we can not do it for object destructuring.
 2. In array destructuring we can use any variable name, but incase of object destructuring we need to use exact name of object properties.
 *
 */
/*
*
Use of Array destructuring
*
*/
//1. Swap variables: We can use destructuring to swap variables easily
let x = 1;
let y = 2;
let z = 3;
console.log(x,y,z); //expected output : 1 2 3
[x,y] = [y,x];
console.log(x,y,z); //expected output : 2 1 3

//2. Rest pattern: We can use rest pattern to create new set of array easily
[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);  // expected output: [30,40,50]

//3. Parsing an array returned from a function
function f() {
    return [1, 2];
  }
  
  var a, b; 
  [a, b] = f(); 
  console.log(a); // 1
  console.log(b); // 2

/*
*
Use of Object destructuring
*
*/
//1. Assigning to new variable names: A property can be unpacked from an object and assigned to a variable with a different name than the object property.
var o = {p: 1, q: true};
var {p: foo, q: bar} = o;
 
console.log(foo); // 1
console.log(bar); // true

/*
* Nested object and array destructuring
*/
const metadata = {
    title: 'Scratchpad',
    translations: [
      {
        locale: 'de',
        localization_tags: [],
        last_edit: '2014-04-14T08:43:37',
        url: '/de/docs/Tools/Scratchpad',
        title: 'JavaScript-Umgebung'
      }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
  };
  
  let {
    title: englishTitle, // rename
    translations: [
      {
         title: localeTitle, // rename
      },
    ],
  } = metadata;
  
  console.log(englishTitle); // "Scratchpad"
  console.log(localeTitle);  // "JavaScript-Umgebung"

/*
* Nested object and array destructuring
*/

  var people = [
    {
      name: 'Mike Smith',
      family: {
        mother: 'Jane Smith',
        father: 'Harry Smith',
        sister: 'Samantha Smith'
      },
      age: 35
    },
    {
      name: 'Tom Jones',
      family: {
        mother: 'Norah Jones',
        father: 'Richard Jones',
        brother: 'Howard Jones'
      },
      age: 25
    }
  ];
  
  for (var {name: n, family: {father: f}} of people) {
    console.log('Name: ' + n + ', Father: ' + f);
  }
  
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"