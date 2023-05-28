function subscribe(){
    var email = document.getElementById("email-subscribe").value;
    if  (email == "")
    {
        alert("Please enter the email to subscribe.");
    }
    else{
        document.getElementById("confirmation").innerHTML= "Thank  you  for  subscribing.  "+"'"+email+"'"+"  will now receive new offers.";
        document.getElementById("email-subscribe").value = "";
    }
    
}