function login() {
    let userInput = document.getElementById("name").value;
    let password = document.getElementById("password").value;

    if (userInput == "") {
        document.getElementById("show").innerHTML = "Please enter username/email";
        return false;
    }
    if (password == "") {
        document.getElementById("show").innerHTML = "Please enter password";
        return false;
    }




}
if (userInput === "Eriot" && password === "12345678") {
    document.getElementById("show").innerHTML = "Login successful !"

}
else {
    document.getElementById("show").innerHTML = "Enter valid password or username/email";

}






function registerHere() {
    let name = document.getElementById("name").value;
    let regNo = document.getElementById("number").value;
    let mail = document.getElementById("mail").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm").value;
    let course = document.getElementById("course").value;
    let year = document.getElementById("year").value;
    let selectedRadio = document.querySelector('input[name="gender"]:checked');
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0.-9.-]+\.[a-zA-Z]{2,6}$/;




    if (name == "") {
        document.getElementById("see").innerHTML = "Enter FullName please!";
        return false;
    }
    if (regNo == "") {
        document.getElementById("see").innerHTML = "Registration Number please!";
        return false;
    }
    if (mail == "") {
        document.getElementById("see").innerHTML = "Please enter Email!";
        return false;
    }

    if (!emailPattern.test(mail)) {
        document.getElementById("see").innerHTML = "Please enter a valid Email Address!";
        return false;
    }



    if (course == "") {
        document.getElementById("see").innerHTML = "Course required!";
        return false;
    }
    if (year == "") {
        document.getElementById("see").innerHTML = "Year required!";
        return false;
    }
    if (password == "") {
        document.getElementById("see").innerHTML = "Password required!";
        return false;
    }
    if (password.length < 8) {
        document.getElementById("see").innerHTML = "Password must be at least 8 characters";
        return false;
    }
    if (confirmPassword == "") {
        document.getElementById("see").innerHTML = "Confirm Your password!";
        return false;
    }
    if (password !== confirmPassword) {
        document.getElementById("see").innerHTML = "Passwords do not match!";
        return false;
    }
    if (!selectedRadio) {
        document.getElementById("see").innerHTML = "Please select your gender!";
        return false;
    }

    else {
        alert("Registration successful!")
        return true;
    }

}


