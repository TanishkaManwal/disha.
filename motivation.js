const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it."
];

const stories = [
    "Oprah Winfrey was fired from her first TV job but went on to build an empire.",
    "J.K. Rowling was rejected 12 times before Harry Potter became a success.",
    "Steve Jobs was kicked out of Apple, only to return and revolutionize technology."
];

const tasks = [
    "Write down 3 things you're grateful for.",
    "Avoid social media for an hour and read a book instead.",
    "Try a 5-minute meditation to clear your mind.",
    "Send a kind message to someone you appreciate."
];

function newQuote() {
    document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

function newStory() {
    document.getElementById("story").innerText = stories[Math.floor(Math.random() * stories.length)];
}

function newTask() {
    document.getElementById("task").innerText = tasks[Math.floor(Math.random() * tasks.length)];
}

let focusTime = 0;
function startTimer() {
    setInterval(() => {
        focusTime++;
        document.getElementById("timer").innerText = focusTime;
    }, 60000);
}

function saveJournal() {
    alert("Your journal entry has been saved!");
}

// Initialize first quote, story, and task
newQuote();
newStory();
newTask();
