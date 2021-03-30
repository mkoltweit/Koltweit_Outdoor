var fName = document.getElementById("fname");
var lName = document.getElementById("lname");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var comments = document.getElementById("comments");
var submit = document.getElementById("submitBtn");
var errorMsg = document.getElementsByClassName("errorMsg");



window.addEventListener("load", function(){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    if (page == "activities.html") {
        console.log( page );
    alert("15% off for groups of 8 or more.\n\n Use 15off at checkout.");
    }
});

if (submit) {
    submit.addEventListener("click", function(e) {
        e.preventDefault();
        console.log(errorMsg)
        if (fName.value == "") {
            errorMsg[0].innerHTML = "First name required";
        }
        else {
            errorMsg[0].innerHTML = "";
        }
        if (lName.value == "") {
            errorMsg[1].innerHTML = "Last name required";
        }
        else {
            errorMsg[1].innerHTML = "";
        }
        if (email.value == "") {
            errorMsg[2].innerHTML = "Email required";
        }
        else {
            errorMsg[2].innerHTML = "";
        }
        if (phone.value == "") {
            errorMsg[3].innerHTML = "Phone number required";
        }
        else {
            errorMsg[3].innerHTML = "";
        }
        if ( errorMsg[0].innerHTML == "" && errorMsg[1].innerHTML == "" && errorMsg[2].innerHTML == "" && errorMsg[3].innerHTML == "") {
            document.getElementById("contactForm").submit();
        }
    }, false);
}

function validateForm (e) {
    preventDefault(e);
    // try {
    //     if(fName.value == "") throw "Please Enter First Name";
    //     if(lName.value == "") throw "Please Enter Last Name";
    //     if(email.value == "") throw "Please Enter Email";
    //     if(phone.value == "") throw "Please Enter Phone Number";
    //   }
    //   catch(err) {
    //     message.innerHTML = err;
    //   }
    // errorMsg.innerHTML = "";


}
