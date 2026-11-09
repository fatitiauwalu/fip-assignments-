// Test connection message
console.log("JavaScript is successfully connected!");

// --- Feature 1: Dark Mode Toggle ---
const themeToggleButton = document.querySelector('#theme-toggle');

themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = '☀️ Light Mode';
    } else {
        themeToggleButton.textContent = '🌙 Dark Mode';
    }
});

// --- Feature 2: Mobile Navigation Menu ---
const menuBtn = document.querySelector('#menu-btn');
const navLinks = document.querySelector('#nav-links');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});

// --- Feature 3: Interactive Size Selector ---
const sizeButtons = document.querySelectorAll('.size-btn');
const sizeMessage = document.querySelector('#size-message');

sizeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        // Remove 'active' class from all buttons
        sizeButtons.forEach(function(btn) {
            btn.classList.remove('active');
        });

        // Add 'active' class to the clicked button
        button.classList.add('active');

        // Update the message text
        sizeMessage.textContent = 'Selected Size: ' + button.textContent;
    });
});


// --- Feature 4: Interactive Toast Notification ---
const toast = document.querySelector('#toast-notification');
const toastCloseBtn = document.querySelector('#toast-close-btn');

// Function to show the toast notification
function showToast(message) {
    const toastMessage = document.querySelector('#toast-message');
    toastMessage.textContent = message;
    toast.classList.remove('hidden');

    // Automatically hide the toast after 4 seconds
    setTimeout(function() {
        toast.classList.add('hidden');
    }, 4000);
}

// Close the toast immediately when clicking the '×' button
toastCloseBtn.addEventListener('click', function() {
    toast.classList.add('hidden');
});

// Example: Trigger the toast when clicking any of our size buttons!
const sizeButtonsForToast = document.querySelectorAll('.size-btn');
sizeButtonsForToast.forEach(function(button) {
    button.addEventListener('click', function() {
        showToast("✨ Size " + button.textContent + " added to selection!");
    });
});