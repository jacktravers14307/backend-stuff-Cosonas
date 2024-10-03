async function login() {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username: usernameInput, password: passwordInput })
    });

    const result = await response.json();
    if (result.success) {
        alert("Login successful!");
    } else {
        alert("Login Failed. Check your username and password");
    }
}