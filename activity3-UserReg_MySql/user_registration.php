<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Registration</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>User Registration</h2>
        <form id="registrationForm" method="POST">
            <div class="form-group">
                <label for="username">Username</label>
                <input class="form-control" type="text" id="username" required>
            </div>

            <div class="form-group">
                <label for="email">Email</label>
                <input class="form-control" type="email" id="email" required>
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input class="form-control" type="password" id="password" required>
            </div>

            <button class="btn btn-primary" name="register" type="SUBMIT">Register</button>
        </form>
    </div>

    <script src="user_registration.js"></script>
</body>
</html>
