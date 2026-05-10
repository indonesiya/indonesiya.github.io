// Set the overflow property on the body element to prevent scrolling
document.body.style.overflow = "hidden";
// Use a timer to enable scrolling after 5 seconds
setTimeout(function () {
    document.body.style.overflow = "auto";
}, 5000); // 5000 milliseconds = 4 seconds