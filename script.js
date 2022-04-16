function submitForm(event){ 
   event.preventDefault();
  var user = document.getElementById("user");
  var pass = document.getElementById("pass");
  if (user.value=="MinhQuan" && pass.value=="2008") {
    window.location="https://www.youtube.com/";
  } else {
    window.alert("SORRY UNCORRECT PASSWORD OR USERNAME");
  }
}