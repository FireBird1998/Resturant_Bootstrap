// Active Nav Bar
const nav = document.querySelector(".navigation-wrap");
window.onscroll = function() {
    // When the user scrolls down more than 20 pixels...
    if (document.documentElement.scrollTop > 20) {
        // Add the "scroll-on" class to the navigation bar.
        nav.classList.add("scroll-on");
    } else {
        // Otherwise, remove the "scroll-on" class from the navigation bar.
        nav.classList.remove("scroll-on");
    }
}

// Nav Hide
const navBar = document.querySelectorAll('.nav-link');
const navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a) {
    // Add a click event listener to each navigation link.
    a.addEventListener("click", () => {
        // When a link is clicked, remove the "show" class from the navigation collapse element.
        // This closes the navigation menu on mobile devices.
        navCollapse.classList.remove("show");
    })
});

// Counter Actions
document.addEventListener("DOMContentLoaded", () => {
    // Define a function to animate a counter.
    function Counter(id, start, end, duration) {
        let obj = document.getElementById(id),
            current = start,
            range = end - start,
            increment = end > start ? 1 : -1,
            // Calculate the step size based on the duration and range.
            step = Math.abs(Math.floor(duration / range)),
            // Use setInterval to update the counter value at specified intervals.
            time = setInterval(() => {
                current += increment;
                obj.textContent = current;
                // When the counter reaches the end value, clear the interval.
                if (current === end) {
                    clearInterval(time);
                }
            }, step);
    }
    
    // Call the Counter function to animate different counters with specific values.
    Counter("count1", 600, 1287, 3000);
    Counter("count2", 500, 1398, 2500);
    Counter("count3", 500, 2100, 1000);
    Counter("count4", 2000, 2400, 2000);
});
