const chatbox = document.getElementById('chatbox');
const userInputForm = document.getElementById('userInputForm');
const userInput = document.getElementById('userInput');

// Function to add a message to the chatbox
function addMessage(text, sender) {
    const message = document.createElement('div');
    message.classList.add('message');
    message.classList.add(sender === 'bot' ? 'bot' : 'user');
    message.innerHTML = `<p>${text}</p>`;
    chatbox.appendChild(message);

    // Scroll to bottom
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Function to handle user input
function handleUserInput(event) {
    event.preventDefault();

    const message = userInput.value.trim();
    if (message === '') {
        return;
    }

    addMessage(message, 'user');
    userInput.value = ''; // Clear input field

    // Simulate bot response
    setTimeout(() => {
        const response = getBotResponse(message);
        addMessage(response, 'bot');
    }, 500); // Simulate typing delay
}

// Function to generate bot response
function getBotResponse(message) {
    // Here you can implement your bot's logic to generate responses based on user messages
    // For simplicity, we'll just echo back the user's message
    return `You said: "${message}"`;
}

// Event listener for user input form submission
userInputForm.addEventListener('submit', handleUserInput);

// Focus on input field when the page loads
window.onload = function() {
    userInput.focus();
};
