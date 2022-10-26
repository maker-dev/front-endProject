//!script for slider from here
const myslide = document.querySelectorAll(".mySlider"),
    dot = document.querySelectorAll(".dot");
let counter = 1;
let imgCounter = 1;
//from here function of auto switch images
function slidefun(n) {
  let i;
  imgCounter += 1;
  if (imgCounter === 6) {
    resetTimer();
  }
  for (i = 0; i < myslide.length; i++) {
    myslide[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  if (n > myslide.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = myslide.length;
  }
  myslide[counter - 1].style.display = "block";
  dot[counter - 1].className += " active";
}
slidefun(counter);

let timer = setInterval(autoSlide, 500);

function autoSlide() {
  counter += 1;
  slidefun(counter);
}

// end auto switch images

//this function is reseting the Interval for not having a problem
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(autoSlide,5000);
}
// reset function end here

// function for sliding from arrows
function plusSlides(n) {
  counter += n;
  slidefun(counter);
  resetTimer();
}
// arrows sliding end here

//circle sliding start here
function currentSlide(n) {
  counter = n;
  slidefun(counter);
  resetTimer();
}
//circle sliding end here

//add button event from here
let nextBtn = document.querySelector(".next"),
    prevBtn = document.querySelector(".prev");
const allDotCircles = document.querySelectorAll(".dot");

nextBtn.addEventListener("click",function () {
  plusSlides(1);
})

prevBtn.addEventListener("click",function () {
  plusSlides(-1);
})

allDotCircles.forEach((item,index) => {
    item.addEventListener("click",function () {
      if (index === 0) {
        currentSlide(1);
      } else if (index === 1) {
        currentSlide(2);
      } else if (index === 2) {
        currentSlide(3);
      } else {
        currentSlide(4);
      }
    })
})
//button's event end here
//!slider end here

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