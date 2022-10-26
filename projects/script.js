
//!changing header when scrolling

let header = document.querySelector(".headerContainer");
let links = document.querySelectorAll("header .headerContainer nav ul li a");
let logo = document.querySelector(".mylogo");


window.onscroll = function () {
  if (window.scrollY > 0) {
    header.style.backgroundColor = "rgb(228, 230, 231)";//---I changed background_color from blue to whitegrey---//
    //-----on scroll Links will colored with black-----//
    links.forEach(function(elm){
      elm.style.color="rgb(100, 95, 95)";
    });
   logo.style.filter="grayscale(0%)"; //color blue for logo



  } else {
    header.style.backgroundColor = "transparent";
    links.forEach(function(elm){
      //-----Links will colored with WHite-----//
      elm.style.color="white";
      
    });
    logo.style.filter="grayscale(80%)"; //color grey&black for logo

   
  };
};

//!changing header when scrolling end

//!burger activation
const myBuger = document.querySelector(".burger");
const mylinesBurger = document.querySelectorAll(".burger span");
const myUlofBurger = document.querySelector("header nav ul");
const allLinks = document.querySelectorAll("header nav ul li a");

myBuger.addEventListener("click",function () {
  myUlofBurger.classList.toggle("burgerActive");
  if (myUlofBurger.classList.contains("burgerActive")) {
    mylinesBurger[1].style.opacity = "0";
    mylinesBurger[0].style.transform = "translateY(8px) rotate(45deg)";
    mylinesBurger[2].style.transform = "translateY(-8px) rotate(-45deg)";
  } else {
    mylinesBurger[1].style.opacity = "";
    mylinesBurger[0].style.transform = "";
    mylinesBurger[2].style.transform = "";
  }
})

allLinks.forEach(link => {//this check if you click a link while the burger is active (remove the activation)
  link.addEventListener("click",function () {
    if (myUlofBurger.classList.contains("burgerActive")) {
      myUlofBurger.classList.remove("burgerActive");
      mylinesBurger[1].style.opacity = "";
      mylinesBurger[0].style.transform = "";
      mylinesBurger[2].style.transform = "";
    }
  })
})
//!burger activation end here

//!scroll button start from here
//-------To Top button--------//
//Get the button:
let mybutton = document.getElementById("myBtn");

window.addEventListener("scroll",function () {
  if (window.scrollY < 200) {
    mybutton.style.display = "none";
  } else {
    mybutton.style.display = "block";
  }
}) 
//click event for scrolling to top
mybutton.addEventListener("click",function () {
  window.scrollTo({
    top: 0
  })
})
//!scroll button end 