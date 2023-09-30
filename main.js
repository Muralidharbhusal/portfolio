var Typed = new Typed(".text",{
    strings:["Machine Learning Engineer", "Data Scientist", "Student"],
    typeSpeed:50,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

// Function to trigger the progress bar animations
function animateProgressBar() {
    const progressBars = document.querySelectorAll('.Technical-bars .bar .progress-line');
    
    progressBars.forEach((bar) => {
        bar.style.animation = 'animate 1s cubic-bezier(1,0,0.5,1) forwards';
    });
    
    const progressBarSpans = document.querySelectorAll('.Technical-bars .bar .progress-line span');
    
    progressBarSpans.forEach((span) => {
        span.style.animation = 'animate 1s 1s cubic-bezier(1,0,0,0.5,1) forwards';
    });
}

// Call the function when the page loads or at the appropriate time
window.addEventListener('load', animateProgressBar);
