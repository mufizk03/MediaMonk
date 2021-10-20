console.log("wellcome...")
let slides = document.querySelectorAll(".slider");
let prevSlide = document.querySelector(".btnPrev");
let nextSlide = document.querySelector(".btnNext");
let slidesImg = document.getElementsByClassName("item")
let flag = 0;
slidesItem(flag);
//this function is use in html page for onclick event
function btnChang(x) {
    // console.log("you r click on next or Prev Btn")
    flag = flag + x;
    //call a function
    slidesItem(flag);

}

function slidesItem(num) {
    //
    if (num == slidesImg.length) {
        flag = 0;
        num = 0;
    }
    if (num < 0) {
        flag = slidesImg.length - 1;
        num = slidesImg.length - 1
    }
    for (let y of slidesImg) {
        y.style.display = "none"

    }
    slidesImg[num].style.display = "block"
}