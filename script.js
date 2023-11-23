document.querySelector(".ser-1").addEventListener("mousemove", function(){
    document.querySelector(".h-div-1").style.top = "0%";
    document.querySelector(".ser-1").style.cursor = "pointer";
})

document.querySelector(".ser-1").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-1").style.top = "100%";
})


document.querySelector(".ser-2").addEventListener("mousemove", function(){
    document.querySelector(".h-div-2").style.top = "0%";
    document.querySelector(".ser-2").style.cursor = "pointer";
})

document.querySelector(".ser-2").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-2").style.top = "100%";
})

document.querySelector(".ser-3").addEventListener("mousemove", function(){
    document.querySelector(".h-div-3").style.top = "0%";
    document.querySelector(".ser-3").style.cursor = "pointer";
})

document.querySelector(".ser-3").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-3").style.top = "100%";
})

document.querySelector(".ser-4").addEventListener("mousemove", function(){
    document.querySelector(".h-div-4").style.top = "0%";
    document.querySelector(".ser-4").style.cursor = "pointer";
})

document.querySelector(".ser-4").addEventListener("mouseleave", function(){
    document.querySelector(".h-div-4").style.top = "100%";
})


var tl = gsap.timeline({scrollTrigger:{
    trigger: ".part-2",
    start:"50% 50%",
    end:"100% 100%",
    scrub:true,
    // markers: true,
}});
tl
.to(".banner-1",{
    left: "-20%",
}, 'a')
.to(".banner-2",{
    right: "-15%",
}, 'a')








//g




var burger = document.querySelector('.burger');
var burgerLinks = document.querySelector('.nav-links');
var burgerLines = document.querySelector('.burger');
var navBar = document.querySelector('nav');
var gallery = document.querySelectorAll('.production-gallery img');
var navLinks = document.querySelectorAll('.nav-links a');


window.addEventListener('scroll', function () {
    for (var x = 0; x < gallery.length; x++) {
        if (gallery[x].getBoundingClientRect().top < 700) {
            gallery[x].classList.add('reveal-img');
        }
    }

});


if(window.outerWidth > 768){
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 70) {
            navBar.classList.add('nav-animation');
        } else {
            navBar.classList.remove('nav-animation');
        }
    
    });
}

burger.addEventListener('click', burgerNavigation);




function burgerNavigation() {
    burgerLinks.classList.toggle('burger-animation');
    burger.getElementsByTagName('div')[0].classList.toggle('line1-animate');
    burger.getElementsByTagName('div')[1].classList.toggle('line2-animate');
    burger.getElementsByTagName('div')[2].classList.toggle('line3-animate');

}
















var $cont = document.querySelector('.cont');
var $elsArr = [].slice.call(document.querySelectorAll('.el'));
var $closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));

setTimeout(function() {
  $cont.classList.remove('s--inactive');
}, 200);

$elsArr.forEach(function($el) {
  $el.addEventListener('click', function() {
    if (this.classList.contains('s--active')) return;
    $cont.classList.add('s--el-active');
    this.classList.add('s--active');
  });
});

$closeBtnsArr.forEach(function($btn) {
  $btn.addEventListener('click', function(e) {
    e.stopPropagation();
    $cont.classList.remove('s--el-active');
    document.querySelector('.el.s--active').classList.remove('s--active');
  });
});













