var arr = [ 1 , 2 , [ 3 , 4 ],"codingBro"] ;
console.log(arr[2][1]) ; //  return 4
console.log(arr[5])  ;     // return undefined
console.log(arr[-1])  ;   //return undefined
arr.unshift(-2,-1,0);
console.log(arr);
console.log("===========================================================>");
//toString()
let toStr=arr.toString()
console.log(toStr);
console.log(typeof(toStr));
console.log(toStr.length);

//String()
let str=String(arr);
console.log(str);
console.log(typeof(str));
console.log(str.length);


//new String()
let newStr=new String(arr);
console.log(newStr);
console.log(typeof(newStr));
console.log(newStr.length);

//putting array into a string

let strJS=arr.join();

console.log(strJS);
console.log(typeof(strJS));
console.log(strJS.length);

console.log("==============================================>")

console.log("My \"name\" is Joe.");

// Objects can not be compared : 

 let str1 = new String("Coding Ninjas") ;             
let str2 = new String("Coding Ninjas") ;
 
console.log(str1 ==  str2) ; //  false 

// Function to extract numbers & string
function myGeeks() {

	let str = "foo35bar5jhkj88";
	console.log(str)
    //extract number
	let matches = str.match(/\d+/g);
    //extract string
    let strExt = str.replace(str.match(/\d+/g),"");

	console.log(matches);
    console.log(strExt);
    console.log(typeof(matches));
    let value = Number(matches[0])  +  Number(matches[1])  +  Number(matches[2]);
    console.log(typeof(value));
    console.log(value);

    console.log(strExt);
    console.log(typeof(strExt));

}

// Function call
myGeeks();
console.log(Number("123"));
console.log(Number(" "));
console.log(Number("abc"));


console.log(String(false));

console.log(String( 10 / "2.5" ));




