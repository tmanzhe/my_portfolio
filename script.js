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

    // Check if helloElement is found
    if (!helloElement) {
        console.error("Element #hello h1 not found.");
        return;
    }

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

document.addEventListener('DOMContentLoaded', function() {
    // Ensure the page scrolls to the top on load
    window.scrollTo({ top: 0, behavior: 'auto' });

    // Initial drop-in and fade effect for "hello!"
    const helloElement = document.querySelector("#hello h1");
    if (helloElement) {
        helloElement.classList.add('drop-in');

        // Set up the interval to change greetings
        intervalID = setInterval(changeGreeting, 75); // Update every 75 milliseconds

        // Smooth scroll to the top when "home" is clicked
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

        // Remove any hash fragment from the URL
        if (window.location.hash) {
            history.replaceState(null, null, window.location.pathname);
        }
    } else {
        console.error("Element #hello h1 not found on page load.");
    }
});

// Intersection Observer for the separator text
document.addEventListener('DOMContentLoaded', function() {
    const separatorText = document.querySelector('#seperator-text');

    if (separatorText) {
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
    } else {
        console.error("Element #seperator-text not found.");
    }
});

// Handle scroll event for progress bar
document.addEventListener('scroll', () => {
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100;
    document.getElementById('progress-bar').style.width = scrollPercent + '%';
});
