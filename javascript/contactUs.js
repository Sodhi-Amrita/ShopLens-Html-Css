let popup = document.getElementById("popup");
/*JavaScript for contact form */
function openPopup() {
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    if ((first == "") || (last == "") || (email == "")) {
        alert("Please fill out the contact form");
        return false;
    }
    else {
        document.getElementById("appointment-confirmation").innerHTML = "Hello " + first + " "+ ", your query has been successfully submitted. <br><br>Certain department will contact you as soon as possible"
        popup.classList.add("open-popup");
        return true;
    }

}

/*JavaScript for feedback form*/
function openPopup2() {
    let first2 = document.getElementById("fname2").value;
    let last2 = document.getElementById("lname2").value;
    let email2 = document.getElementById("email2").value;
    let age = document.getElementById("age").value;
    if ((first2 == "") || (last2 == "") || (email2 == "") || (age == "")) {
        alert("Please fill out the feedback form");
        return false;
    }
    else {
        document.getElementById("appointment-confirmation").innerHTML = "Hello " + first2 + " "+ ", form has successfully submitted. <br><br>We appreciate your valuable feedback."
        popup.classList.add("open-popup2");
        return true;
    }

}

function closePopup() {
    popup.classList.remove("open-popup");
    location.reload();
}