//Active nav Bar
const nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}
//nav hide
const navBar = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", () => {
        navCollapse.classList.remove("show");
    })
})




//Counter Actions

document.addEventListener("DOMContentLoaded", () => {
    function Counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration/ range)),
        time = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current === end){
                clearInterval(time);
            }
        }, step);
    }
    Counter("count1", 600, 1287, 3000);
    Counter("count2", 500, 1398, 2500);
    Counter("count3", 500, 2100, 1000);
    Counter("count4", 2000, 2400, 2000);

});