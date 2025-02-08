document.addEventListener("DOMContentLoaded", function () {
    // Retrieve user data from session storage
    const userName = sessionStorage.getItem("full-name") || "User";
    const selectedSkills = JSON.parse(sessionStorage.getItem("skills")) || [];

    document.getElementById("userName").textContent = userName;

    // Career Recommendations
    const careerMatches = {
        "Communication": ["Public Relations Specialist", "Marketing Manager", "Sales Executive"],
        "Problem-Solving": ["Business Analyst", "Software Engineer", "Project Manager"],
        "Leadership": ["HR Manager", "Operations Manager", "Entrepreneur"],
        "Creativity": ["Graphic Designer", "Content Creator", "UI/UX Designer"]
    };

    let suggestedCareers = new Set();
    selectedSkills.forEach(skill => {
        if (careerMatches[skill]) {
            careerMatches[skill].forEach(career => suggestedCareers.add(career));
        }
    });

    // Display career suggestions
    const careerList = document.getElementById("careerList");
    careerList.innerHTML = "";
    if (suggestedCareers.size > 0) {
        suggestedCareers.forEach(career => {
            let li = document.createElement("li");
            li.textContent = career;
            careerList.appendChild(li);
        });
    } else {
        careerList.innerHTML = "<li>No specific matches found. Try exploring our career database!</li>";
    }
});


// Mentor Recommendations Logic
const mentors = {
    "Public Relations Specialist": { name: "Sarah Johnson", role: "PR & Communications Expert", meeting: "https://calendly.com/sarah-mentor" },
    "Marketing Manager": { name: "James Brown", role: "Digital Marketing Strategist", meeting: "https://calendly.com/james-mentor" },
    "Software Engineer": { name: "Alex Lee", role: "Senior Software Engineer", meeting: "https://calendly.com/alex-mentor" },
    "Data Scientist": { name: "Linda White", role: "Data Science Consultant", meeting: "https://calendly.com/linda-mentor" },
    "Project Manager": { name: "Michael Adams", role: "Certified Project Manager", meeting: "https://calendly.com/michael-mentor" },
    "Graphic Designer": { name: "Emily Taylor", role: "Creative Director", meeting: "https://calendly.com/emily-mentor" }
};

let mentorList = document.getElementById("mentorList");
mentorList.innerHTML = "";
suggestedCareers.forEach(career => {
    if (mentors[career]) {
        let mentor = mentors[career];
        let mentorCard = document.createElement("div");
        mentorCard.classList.add("mentor-card");

        mentorCard.innerHTML = `
        <h4>${mentor.name}</h4>
        <p>${mentor.role}</p>
        <p>📅 <a href="${mentor.meeting}" class="mentor-btn" target="_blank">Schedule Meeting</a></p>
    `;
        mentorList.appendChild(mentorCard);
    }
});

if (mentorList.innerHTML === "") {
    mentorList.innerHTML = "<p>No mentors available for your career matches. Try reaching out to our general mentor network!</p>";
}

// Function to Download Career List
function downloadCareerList() {
    let textContent = "Your Suggested Careers:\n\n";
    suggestedCareers.forEach(career => {
        textContent += `✅ ${career}\n`;
    });

    const blob = new Blob([textContent], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Career_Suggestions.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
