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

// const now = new Date();
// const hour = now.getHours();

// function greeting(hour) {
//     if (hour < 5 || hour >= 20) {
//         console.log("Good night");
//     } else if (hour < 12) {
//         console.log("Good morning");
//     } else if (hour < 18) {
//         console.log("Good afternoon");
//     } else {
//         console.log("Good evening");
//     }
// }    
// greeting(hour)

// let greetingElement = document.getElementById("greeting");

// if (greetingElement) {
//     greetingElement.innerHTML = "Welcome to MonoMuse Museum!";
// } else {
//     console.log("Title Error");
// }

// function addYear() {
//     const currentYear = new Date().getFullYear();
//     const yearElement = document.getElementById("copyYear")
//     if (yearElement) {
//         yearElement.innerHTML = currentYear;
//     }
// }

var now= new Date();
var year = now.getFullYear();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthName = months[now.getMonth()];

function greetingFunc() {
    var d = new Date();  
    var h = d.getHours();  
    var E = document.getElementById("greeting");  

    if (!E) return;
    if (h >= 5 && h < 12) {  
        E.innerHTML = "Good morning, and welcome to MonoMuse Museum!";  
    } else if (h >= 12 && h < 18) {  
        E.innerHTML = "Good afternoon, and welcome to MonoMuse Museum!"; 
    } else if (h >= 18 && h < 20) {  
        E.innerHTML = "Good evening, and welcome to MonoMuse Museum!";  
        E.innerHTML = "Good night, and welcome to MonoMuse Museum!";  
    } 
}

var currentpage = window.location.href;
console.log(currentpage);  

if (currentpage.includes("index.html")) {  
   greetingFunc();  
}

function addYear() {
    var d = new Date(); 
    var y = d.getFullYear(); 
    var E = document.getElementById("copyYear"); 
    
    if (E) {
    E.innerHTML="&copy; " + y + " MonoMuse. All rights reserved.";  
    } 
}
function ActiveNav() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        if (window.location.href === link.href) {
            link.classList.add("active");
        }
    });
}

ActiveNav();

$("#readLess").click(function(){ 
    $("#longIntro").hide(); 
    $("#readLess").hide();  
    $("#readMore").show();  

  });
  
$("#readMore").click(function(){
    $("#longIntro").show();  
    $("#readLess").show();   
    $("#readMore").hide();   
  });


function getTotal() {
    const quantityI = document.getElementById("quantity");
    const showTotal = document.getElementById("totalPrice");

    const total = ticketType.value * quantityI.value;

    if (quantityI.value > 0) {
        showTotal.innerHTML = total;
    } else {
        showTotal.innerHTML = "0";
    }
}

function submitPurchase() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const quantity = document.getElementById("quantity").value;
    const ticketType = document.getElementById("ticketType").value;
    const date = document.getElementById("visitDate").value;
    const total = quantity * ticketType;

    if (!name|| !email || quantity <=0 ||!date) {
        alert("Fields remain incomplete. Please input all valid information to begin processing your visit to MonoMuse Museum!");
    } else {
        alert(`${name}, your order has began processing. Total: $${total} for ${quantity} ticket/tickets. Redirecting to payment system.`);
    }
}


function selectDate(day) {
    var buy_form = document.getElementById("ticketForm");
    buy_form.style.display = "block";
        var dateInput = document.getElementById("visitDate");

        var today = new Date();
        var year = today.getFullYear();
        var month = today.getMonth() + 1;
    
        month = String(month).padStart(2, '0');
        day = String(day).padStart(2, '0');
    
        dateInput.value = year + "-" + month + "-" + day;
}

function checkout() {
    alert("Redirecting to ticket purchase...");
    location.reload();
}

function updateScheduleToCurrentMonth() {
    const table = document.getElementById("calendarTable");
    const today = new Date();

    const year = today.getFullYear();
    const month = today.getMonth();

    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const currentDay = today.getDate();

    let html = `
        <tr>
            <th colspan="7">${monthNames[month]} ${year}</th>
        </tr>
        <tr>
            <th colspan="7">Select a date</th>
        </tr>
        <tr>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
        </tr>
    `;

    let day = 1;

    for (let week = 0; week < 6; week++) {
        html += "<tr>";

        for (let i = 0; i < 7; i++) {
            if ((week === 0 && i < firstDay) || day > daysInMonth) {
                html += "<td></td>";
            } else {
                if (day < currentDay) {
                    html += `<td><span class="date passed">${day}</span></td>`;
                } else {
                    html += `<td><span class="date" onclick="selectDate(${day})">${day}</span></td>`;
                }
                day++;
            }
        }

        html += "</tr>";

        if (day > daysInMonth) {
            break;
        }
    }

    table.innerHTML = html;
}

if (window.location.href.includes("buytickets.html")) {
    updateScheduleToCurrentMonth();
}

function loadLeafletMap() {
  const mapElement = document.getElementById("map");
  if (!mapElement) return;

  if (typeof L === "undefined") {
    console.log("Leaflet did not load.");
    return;
  }

  if (mapElement._leaflet_id) return;

  const museumLat = 40.4443;
  const museumLng = -79.9436;

  const map = L.map("map").setView([museumLat, museumLng], 15);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);

  L.marker([museumLat, museumLng])
    .addTo(map)
    .bindPopup("Museum Location")
    .openPopup();
}

document.addEventListener("DOMContentLoaded", function () {
  loadLeafletMap();
});

function toggleMenu() {
  const nav = document.querySelector(".nav_bar");
  nav.classList.toggle("responsive");
}

let slideIndex = 1;

document.addEventListener("DOMContentLoaded", function() {
    showSlides(slideIndex);
});

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("imagesShow");
  
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slides[slideIndex-1].style.display = "block";  
}
showSlides(slideIndex);