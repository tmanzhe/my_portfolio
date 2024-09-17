const greetings = [
    "hello!", "你好!", "こんにちは!", "안녕하세요!", "hola!", "bonjour!", "ciao!", "hallo!", "olá!",
    "שלום!", "नमस्ते!", "merhaba!", "สวัสดี!", "ہیلو!", "হ্যালো!", "xin chào!", "szia!",
    "здравствуйте!", "hei!", "salam!", "aloha!", "salut!", "sveiki!", "hej!", "përshëndetje!"
];
const welcome = "welcome to my portfolio";
let currentIndex = 0;
let intervalID;


// Function to change the greeting message
function changeGreeting() {
    const helloElement = document.querySelector("#hello h1");
    const fadeDuration = 75; // Fade duration in milliseconds


    // Fade out the current greeting
    helloElement.classList.add('fade-out');
    setTimeout(() => {
        if (currentIndex < greetings.length) {
            helloElement.innerHTML = greetings[currentIndex];
            helloElement.classList.remove('fade-out');
            helloElement.classList.add('fade-in');
            currentIndex++;
        } else {
            // Switch to the welcome message after the last greeting
            helloElement.classList.add('fade-out');
            setTimeout(() => {
                helloElement.innerHTML = welcome;
                helloElement.classList.remove('fade-out');
                helloElement.classList.add('grow');
            }, fadeDuration); // Time for fade-out to finish
        }
    }, fadeDuration); // Time for fade-out to finish
}


// Function to handle the home link click
function handleHomeLinkClick(event) {
    event.preventDefault(); // Prevent default link behavior


    // Smoothly scroll to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });


    // Delay the page refresh to allow scrolling to complete
    setTimeout(() => {
        window.location.reload(); // Refresh the page
    }, 500); // Delay in milliseconds (adjust as needed)
}


// Start the greeting animation on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initial drop-in and fade effect for "hello!"
    const helloElement = document.querySelector("#hello h1");
    helloElement.classList.add('drop-in');


    // Set up the interval to change greetings
    intervalID = setInterval(changeGreeting, 75); // Update every 75 milliseconds


    // Refresh the page and scroll to the top when "home" is clicked
    document.getElementById('home-link').addEventListener('click', handleHomeLinkClick);


    // Show/hide header based on scroll direction
    let lastScrollTop = 0;
    document.addEventListener('scroll', function() {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;


        if (currentScrollTop > lastScrollTop) {
            // Scrolling down, hide header
            document.getElementById('header').style.top = '-70px';
        } else {
            // Scrolling up, show header
            document.getElementById('header').style.top = '0';
        }


        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });


    // Ensure the page scrolls to the top on load if hash is present
    if (window.location.hash === '#') {
        window.scrollTo({ top: 0, behavior: 'auto' }); // Scroll to the top
        history.replaceState(null, null, window.location.pathname); // Remove the hash
    }
});


// Intersection Observer for the separator text
document.addEventListener('DOMContentLoaded', function() {
    const separatorText = document.querySelector('#seperator-text');


    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // When the separator is in view, trigger the fade-in animation
                separatorText.classList.add('fade-in');
                separatorText.classList.remove('fade-out');
            } else {
                // When the separator is out of view, trigger the fade-out animation
                separatorText.classList.add('fade-out');
                separatorText.classList.remove('fade-in');
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of the separator is visible
    });


    // Observe the separator section
    observer.observe(document.querySelector('.seperator'));
});


// Handle navigation for the 'home' link
document.getElementById('home-link').addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default anchor link behavior
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to the top
    });
});


// Handle scroll event for progress bar
document.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});






