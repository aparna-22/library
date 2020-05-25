function validateForm()
{
var x = document.forms["myForm"]["Username"].value;

  if (x == "") 
    alert("Fields must not be empty");
    return false;
   
  }
