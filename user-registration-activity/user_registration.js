document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registrationForm");

    registrationForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Create user object
        const user = {
            username,
            email,
            password,
        };

        // Store user data in local storage
        localStorage.setItem(username, JSON.stringify(user));

        // Clear form
        registrationForm.reset();
        alert("Registration successful!");
    });
});
