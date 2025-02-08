document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("careerForm");

    if (!form) {
        console.error("🚨 Error: Form with ID 'careerForm' not found.");
        return;
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form submission
        console.log("📌 Form submission started...");

        // Reset error messages
        document.querySelectorAll(".error-message").forEach(msg => msg.style.display = "none");

        let isValid = true;

        // Validate Full Name
        const nameField = document.getElementById("full-name");
        if (!nameField) {
            console.error("🚨 Missing #full-name in DOM.");
            return;
        }
        const name = nameField.value.trim();
        if (name === "") {
            document.getElementById("name-error").style.display = "block";
            isValid = false;
        }

        // Validate Email
        const emailField = document.getElementById("email");
        if (!emailField) {
            console.error("🚨 Missing #email in DOM.");
            return;
        }
        const email = emailField.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.match(emailPattern)) {
            document.getElementById("email-error").style.display = "block";
            isValid = false;
        }

        // Validate Age Group
        const ageGroup = document.getElementById("age-group").value;
        if (!ageGroup) {
            document.getElementById("age-error").style.display = "block";
            isValid = false;
        }

        // Validate Education Level
        const educationField = document.getElementById("education-level");
        if (!educationField) {
            console.error("🚨 Missing #education-level in DOM.");
            return;
        }
        const educationLevel = educationField.value;
        if (!educationLevel) {
            console.error("🚨 Education level is not selected.");
            isValid = false;
        }

        // Validate Skills
        const skills = [...document.querySelectorAll('input[name="skills"]:checked')].map(el => el.value);
        if (skills.length === 0) {
            document.getElementById("skills-error").style.display = "block";
            isValid = false;
        }

        // Validate Industries
        const industries = [...document.querySelectorAll('input[name="industries"]:checked')].map(el => el.value);
        if (industries.length === 0) {
            document.getElementById("industries-error").style.display = "block";
            isValid = false;
        }

        // Validate Work Environment
        const workEnvironment = document.querySelector('input[name="work-environment"]:checked');
        if (!workEnvironment) {
            console.error("🚨 Missing selection for Work Environment.");
            isValid = false;
        }

        // Validate Career Goal
        const careerGoal = document.querySelector('select[name="career-goal"]').value;
        if (!careerGoal) {
            console.error("🚨 Missing selection for Career Goal.");
            isValid = false;
        }

        // Validate Motivation
        const motivation = document.querySelector('input[name="motivation"]:checked');
        if (!motivation) {
            console.error("🚨 Missing selection for Motivation.");
            isValid = false;
        }

        if (isValid) {
            console.log("✅ Form is valid, storing data and redirecting...");

            // Store in session storage
            sessionStorage.setItem("full-name", name);
            sessionStorage.setItem("email", email);
            sessionStorage.setItem("age-group", ageGroup);
            sessionStorage.setItem("education-level", educationLevel);
            sessionStorage.setItem("skills", JSON.stringify(skills));
            sessionStorage.setItem("industries", JSON.stringify(industries));

            // Show success message
            document.getElementById("success-message").style.display = "block";

            // Redirect after successful submission
            setTimeout(() => {
                window.location.href = "success.html";
            }, 2000);
        } else {
            console.log("❌ Form validation failed.");
        }
    });
});
