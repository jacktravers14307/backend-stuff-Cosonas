function signup(){
    const usernameInput = document.getElementById("username").value;
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    // above is just getting the inputs from the input fields and assigning them to constants

    let signupInfo = { // creating a signupInfo object that contains the data and will be sent to server
        username: usernameInput,
        email: emailInput,
        password: passwordInput
    }

    fetch("/randomEndPoint", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(signupInfo)
    })
    .then(response => response.json()) // processes the line sent from the server
    // response.json() is a method that parses the JSON body of the response, it returns a promise that resolves with the parsed JSON data
    .then(data => { // handles the parsed JSON data from the previous then.
        if(data.success){ // checks if the it was successful (check server.js on how it works)
            alert("Signup Successful")
        }else{
            alert(`Signup failed: ${data.message}`) // checks if the request failed
        }
    })
    .catch((error) => { // error catching to prevent crashing
        console.error(`There was an Error! : ${error}`) // logging the error if there is one
    })
}

