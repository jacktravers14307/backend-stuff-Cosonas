const express = require("express");
const path = require("path");

const PORT = 3000; // sets the port 3000

const app = express(); // Initialises the express application

let users = []; // empty array to store user data upon their sign up

app.use(express.json());
app.use(express.static(path.join(__dirname, "public"))); // serves the static files from the public directory
// static means like text, images, videos

app.get("/", (req, res) => { // this sets up the route for the root url, when the route is accessed it responds by sending the index.html file from the public directory to the user
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/randomEndPoint", (req, res) => { // this runs when script.js sends a post request HERE to the server
    const { username, email, password } = req.body; // extracts the username, email and password from the body of the request sent from script.js

    const user = users.find(user => user.username === username && user.email === email);

    if (user) {
        res.json({ success: false, message: "User Already Exists" });
    } else {
        if (username && email && password) { // checks if username, email and password are empty
            users.push({ // as a temp solution, the new object is pushed to the users array
                username: username,
                email: email,
                password: password
            });
            console.log("User signed up:", { username, email, password }); // logs the details to console for testing purposes

            res.json({ success: true }); // sends a success response BACK to the client
        } else {
            res.json({ success: false, message: "Invalid signup data" });
            // sends a response back saying the signup data was invalid
        }
    }
});

app.post("/login", (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: "Invalid username or password" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});