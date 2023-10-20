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

        // Send data to the server using fetch
        fetch('user-reg-submit.php', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                // Clear form
                registrationForm.reset();
                alert("Registration successful!");
            } else {
                alert("Registration failed. Please try again.");
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});
