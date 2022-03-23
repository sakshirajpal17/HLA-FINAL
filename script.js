

function validate(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var errormessage = document.getElementById("errormessage");

    errormessage.style.padding =  "10px" ;

    var text;

    if(fname.length < 3){
        text = "Please Enter Valid Name"
        errormessage.innerHTML = text;
        return false;
    }
    if(lname.length < 2){
        text = "Please Enter Correct last name";
        errormessage.innerHTML = text;
        return false;
      }
      if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        errormessage.innerHTML = text;
        return false;
      }
      if(email.indexOf("@") == -1 || email.length < 6){
        text = "Please Enter valid Email";
        errormessage.innerHTML = text;
        return false;
      }
      if(message.length <= 100){
        text = "Please Enter More Than 140 Characters";
        errormessage.innerHTML = text;
        return false;
      }
      alert("Form Submitted Successfully!");
      return true;
    


}