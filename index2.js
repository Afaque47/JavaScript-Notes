// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(1.8));
// console.log(Math.max(1,3,-5,1));
// console.log(Math.min(1,3,-1,5));
// console.log(Math.abs(-2.10));


let lastName=' Ahmad ';
let firstName=new String('Afaque');
console.log(typeof lastName);
console.log(typeof firstName);
console.log(firstName);
// . lagate hi lastName(primitive) is treated as an object(referance)   
console.log(lastName.length);

let str="This is my first message";
let s=str.split(' ');
console.log(s);
console.log(typeof(s));
let jaise=`  This is
  ${lastName}
2nd mesaage.`;
console.log(jaise);

let date=new Date(1994,11,21,21);
date.setFullYear(1998);
console.log(date);

let arr=[1,2,3,4];
arr.push('Ahmad');
arr.unshift('Afaque');
arr.splice(3,0,'+');
arr.pop();
console.log(arr);

let subjects=[
    {subject:'Hindi',  totalMarks:100,marksObtained:90},
    {subject:'English',totalMarks:100,marksObtained:85},
    {subject:'Maths',  totalMarks:100,marksObtained:95},
    {subject:'Science',totalMarks:100,marksObtained:80}
]

   /* let box=subjects.find(
        function(obj){
         return   obj.subject==='English';

        }
    )   */
    let box=subjects.find(obj=>obj.subject==='Maths');
    console.log(box);
let numbers=[1,2,3,4,5];
numbers.pop();
numbers.shift();
numbers.splice(1,1);
console.log(numbers);
let first=[1,2,3];
let second=[4,5,6];
let combined=first.concat(second);
console.log(combined);

let slicedItem=combined.slice(2,4);
console.log(slicedItem);

let ar=[10,20,3,4,15,-41,76];
// for(let value of ar){
//     
// }
// ar.forEach(function(value){
//     console.log(value);
// })
// ar.forEach(value=>console.log(value))

let mess='My name is Khan';
let mess2=mess.split(' ');
console.log(mess2);

let mess3=mess2.join();
console.log(mess3);

let nbr = [7, 5, -4, 50, 6, 0,"3","1","19"];


nbr.sort((a,b)=>a-b);

console.log(nbr);

let filtered=nbr.filter(value=>value>=0);
 
console.log(filtered);

let arrr=[1,2,-3,4,-5,6];
let boxy=arrr.map(value=>'student no:'+ value);
console.log(boxy);

let items=arrr.filter(num => num >= 0).map(val =>  obj={value:val});
console.log(items);