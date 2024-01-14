// line below is used to print on the console window
console.log('Hello ji ');

//factory function
function createRect(len,bre){
    return rectangle={
        length:len,
        breadth:bre,
        draw(){
            console.log('drawing');
        }
    };
}

let rec1=createRect(4,5);
//constructor function

function Rectangle(){
    this.length=1;
    this.breadth=2;
    this.draw=function(){
        console.log('drawing');
    }
}
let rec2=new Rectangle();
console.log(rec2);
rec2.color='pink';
delete rec2.color;
rec2.color='black';
//for-in loop
for(let key in rec2){
    console.log(key, rec2[key]);
}
// for-of loop


for(let key of Object.keys(rec2)){ //only keys
    console.log(key);
}
for(let key of Object.entries(rec2)){   //both keys and value
    console.log(key);
}

//to see if a key is present or not

/* if('color' in rec2){
    console.log('present')
}
else{
    console.log('absent');
}  */

let ans= ('length' in rec2)? 'present':'absent';
console.log(ans);


//cloning ->by iteration
let dest={};          //create an empty object
for(let key in rec2){
    dest[key]=rec2[key];

}
console.log(dest);

dest.kabir='loha';
//cloning ->by assign
let obj={
    a:1,
    b:2,
    c:3
};

let dest2=Object.assign({},dest,obj);
console.log(dest2);

dest2.boka='gaali de raha hai';

//cloning ->by spread
let dest3={...obj};
console.log(dest3);
