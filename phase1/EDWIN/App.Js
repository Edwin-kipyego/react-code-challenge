// Get current hour to display greeting
const greeting = document.getElementById("greeting");

const currentHour = new Date().getHours();

if (currentHour >= 5 && currentHour < 12) {
    greeting.textContent = "Good morning! Welcome to my portfolio.";
} else if (currentHour >= 12 && currentHour < 18) {
    greeting.textContent = "Good afternoon! Welcome to my portfolio.";
} else {
    greeting.textContent = "Good evening! Welcome to my portfolio.";
}

// Handle form submission (just for demo)
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent!');
    form.reset();
});
