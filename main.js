//active navber
let nav = document.querySelecto(".navitagion-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }

}   
//nav hide:
let navBar = document.querySelectorAll('.nav-link');
let navcollapse = document.querySelector('navbar-collopse.collopse');
navBar.forEach(function(a)){
    a.addEventListener("click",function()){
        navcollapse.classList.remove("show");
    }
}
