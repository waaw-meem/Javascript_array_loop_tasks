// Task One

let activities = [
    ['Work', 9],
    ['Eat', 1],
    ['Commute', 2],
    ['Play Game', 1],
    ['Sleep', 7]
];

// Task two

let multi_array = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]

document.write(`${multi_array[0].join(' ')} <br> ${multi_array[1].join(' ')} <br> ${multi_array[2].join(' ')} <br>`)

// Task three

let count_number = [1,2,3,4,5,6,7,8,9,10];

var txt="";
for(var i in count_number){
    txt += count_number[i] + "<br>"
}

document.write(txt)

// Task four

let number = +prompt("Enter the number you want to generate multiplication number")
let table_length = +prompt("Enter the length of the table you want to add or generate")

let result = "";
for(var z=1; z<=parseInt(table_length); z++){

    result += `${number} * ${z} = ${number*z} <br>`
}

document.write(result)

// Task five

let fruits = ['apple','banana','mango','orange','strawberry'];
let array_result = "";

for(var j=0; j<fruits.length;j++){
    array_result += `Element at index ${j} is ${fruits[j]} <br>`
}

document.write(array_result)

// Task six

// Counting 

for(var a=0; a<=15; a++){
    document.write(a + " " + "<br>")
}

// Reverse Counting

let array_count = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
document.write('Reverse')
document.write(array_count.reverse() + "<br>")

// Even 

for(var b=1; b<=20; b += 2){
    document.write(b + " " +"<br>")
}

// odd
for(var c=1; c<=19; c += 3){
    document.write(c + " " +"<br>")
}

// K series

for(var d=1; d<=20; d += 2){
    document.write(d + "k " +"<br>")
}

// Task Seven

let baker_items = ['cake','apple-pie','cookie','chips','patties'];
let user_search = prompt("Enter the item you want to search")


for(var e in baker_items){
if(user_search == baker_items[e]){
    alert(`${user_search} is available`)
    break
}else{
    alert(`${user_search} is not available`)
    break
}
}
// Task Eight

let numbers_list = [24,53,78,91,12];

function myArrayMin(arr) {
    return Math.max.apply(null, arr);
  }
document.write("The largest number in an array is " + myArrayMin(numbers_list))


// Task Nine

let points = [24,53,78,91,12];

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
  }
document.write("The smallest number in an array is " + myArrayMin(points))

// Task Ten

for(var x=5; x<=100; x+=5){
    document.write("<br>")
    document.write(x)
}