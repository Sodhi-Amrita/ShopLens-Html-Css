let popup = document.getElementById("popup");
function openPopup() {
    let first = document.getElementById("fname").value;
    let last = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let dob = document.getElementById("dob").value;
    let gender = document.getElementById("gender").value;
    let appointmentDate = document.getElementById("appointmentDate").value;
    if ((first == "") || (last == "") || (email == "") || (phone == "") || (dob == "") || (gender == "") || (appointmentDate == "")) {
        alert("Please fill out the form");
        location.reload();
        return false;
    }
    else {
        document.getElementById("appointment-confirmation").innerHTML = "Hello " + first + " " + last + ", your appointment has been successfully booked. <br><br>Further details will be email to you at " + email + "."
        popup.classList.add("open-popup");
        return true;
    }

}
function closePopup() {
    popup.classList.remove("open-popup");
    location.reload();
}