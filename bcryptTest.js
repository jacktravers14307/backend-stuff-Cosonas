const bcrypt = require("bcrypt");

const salt = 10;
const plainTextPassword = "ThisIsAPassword";

bcrypt.hash(plainTextPassword, salt, function(err, hash) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(hash);

    bcrypt.compare(plainTextPassword, hash, function(err, result) {
        if (err) {
            console.error(err);
            return;
        }
        console.log(result); // true if the password matches, false otherwise
    });
});