// Sample mentor data
const mentors = [
    { name: "Dr. Aditi Sharma", expertise: "AI & ML", contact: "aditi@example.com" },
    { name: "Rahul Verma", expertise: "Software Development", contact: "rahul@example.com" },
    { name: "Neha Kapoor", expertise: "Data Science", contact: "neha@example.com" },
    { name: "Vikas Gupta", expertise: "Cybersecurity", contact: "vikas@example.com" },
    { name: "Sonia Mehta", expertise: "Product Management", contact: "sonia@example.com" }
];

// Function to display mentors
function displayMentors(mentorsList) {
    const container = document.getElementById("mentors-list");
    container.innerHTML = "";
    
    mentorsList.forEach(mentor => {
        const mentorCard = document.createElement("div");
        mentorCard.classList.add("mentor-card");
        
        mentorCard.innerHTML = `
            <h2>${mentor.name}</h2>
            <p><strong>Expertise:</strong> ${mentor.expertise}</p>
            <button class="contact-btn" onclick="alert('Contact: ${mentor.contact}')">Contact</button>
        `;

        container.appendChild(mentorCard);
    });
}

// Function to search mentors
function searchMentors() {
    const searchText = document.getElementById("search").value.toLowerCase();
    const filteredMentors = mentors.filter(mentor =>
        mentor.expertise.toLowerCase().includes(searchText)
    );
    displayMentors(filteredMentors);
}

// Load mentors on page load
document.addEventListener("DOMContentLoaded", () => displayMentors(mentors));
