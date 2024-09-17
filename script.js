const greetings = [
    "hello!", "你好!", "こんにちは!", "안녕하세요!", "hola!", "bonjour!", "ciao!", "hallo!", "olá!",
    "שלום!", "नमस्ते!", "merhaba!", "สวัสดี!", "ہیلو!", "হ্যালো!", "xin chào!", "szia!",
    "здравствуйте!", "hei!", "salam!", "aloha!", "salut!", "sveiki!", "hej!", "përshëndetje!"
 ];
 const welcome = "welcome to my website";
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
 
 
 // Start the greeting animation on page load
 document.addEventListener('DOMContentLoaded', function() {
    // Initial drop-in and fade effect for "hello!"
    const helloElement = document.querySelector("#hello h1");
    helloElement.classList.add('drop-in');
 
 
    // Set up the interval to change greetings
    intervalID = setInterval(changeGreeting, 75); // Update every 75 milliseconds
 
 
    // Refresh the page when "home" is clicked
    document.getElementById('home-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.location.reload(); // Refresh the page
    });
 
 
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
 });
 
 
 
 