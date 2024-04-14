function walk(){
    console.log('walking');
}
walk();
let fun1=function move(){
    console.log('moving');
}
let fun2=fun1;
fun2();

function sum(){
     console.log(arguments);
     
     let total=0;
     for(let value of arguments){
        total+=value;
     }
     return total;
    

}
console.log(sum(1,2,3,4,5));

function abc(...args){
    let total=0;
    console.log(args);
    for(let value of args){
        total+=value;
    }
    return total;
}
console.log(abc(1,2,3,4,5,6,7,8,9,10));

//getter setter
let person={
    fName:'Afaque',
    lName:'Ahmad',
    get fullName(){
       return `${person.fName} ${person.lName}`;
    },

    set fullName(value){
        let parts=value.split(' ');
        this.fName=parts[0];
        this.lName=parts[1];
    }
    
    
};

person.fullName='Aditya Shah';
console.log(person.fullName);
// error handling
let person2={
    fName:'Afaque',
    lName:'Ahmad',
    get fullName(){
        return `${fName} ${lName}`;
    },
    set fullName(value){
        if(typeof(value) !== String){
        throw new Error ('string daal be');
        
        }
        let parts=value.split(' ');
        fName=parts[0];
        lName=parts[1];

    }
}
try{
    person2.fullName=true;
}
catch(e){
    // alert(e);

}

// reduce function
let arr7=[1,2,3,4,5,6,7,8];

let totalSum=arr7.reduce((accumulator, currentVal)=> accumulator + currentVal,0);
console.log('totalSum : '+ totalSum);


arr7["daalo"]=17;
// arr7.daalo=17;
console.log(arr7);

for(let key in arr7){
    console.log(key,arr7[key]);
}

let ladki={
     aankh:2,
     naak:1
};
ladki.haath=2;
for(let key in ladki){
    console.log(key,ladki[key]);
}
let a=3;
let b='9';
console.log(a+b);      //39
console.log(3 + 4 +'2'+ 7 + 3)   //7273
console.log(3 - '-2');   //5
console.log(5 / '2');    //2.5


