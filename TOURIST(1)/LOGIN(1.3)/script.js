document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        alert("Login successful!");
        // Add authentication logic here
    }
});
