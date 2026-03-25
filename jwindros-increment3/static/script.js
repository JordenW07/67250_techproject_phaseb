// var x = 5;
// var y = 7;
// var z = x+y;
// console.log(z)

// var A = "Hello ";
// var B= "world!";
// var C = A+B;
// console.log(C)

// function sumnPrint(x1,x2) {
//     x3 = x1 + x2;
//     console.log(x3) 
// }

// sumnPrint(x, y)
// sumnPrint(A, B)

// if (C.length > z) {
//     console.log(C);
// } else if (C.length < z) {
//     console.log(z)
// } else {
//     console.log("good job!")
// }

// L1 = ["Watermelon","Pineapple","Pear","Banana"];
// L2 = ["Apple","Banana","Kiwi","Orange"];


// function findTheBanana(arr) {
//     for (let i = 0; i < arr.length; i+=1) {
//         if (arr[i]=="Banana") {
//             alert("Banana found in this array!");
//         }
//     }
// }

// function findTheBanana(arr) {
//     arr.forEach(function(item) {
//         if (item == "Banana") {
//             alert("Banana found using forEach!");
//         }
//     });
// }
// findTheBanana(L1);
// findTheBanana(L1);

const now = new Date();
const hour = now.getHours();

function greeting(hour) {
    if (hour < 5 || hour >= 20) {
        console.log("Good night");
    } else if (hour < 12) {
        console.log("Good morning");
    } else if (hour < 18) {
        console.log("Good afternoon");
    } else {
        console.log("Good evening");
    }
}    
greeting(hour)

let greetingElement = document.getElementById("greeting");

if (greetingElement) {
    greetingElement.innerHTML = "Welcome to MonoMuse Museum!";
} else {
    console.log("Title Error");
}

function addYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("copyYear")
    if (yearElement) {
        yearElement.innerHTML = currentYear;
    }
}