function redirect() {
  var e = document.getElementById('email').value;
  var msg = `a confirmation emal has been sent to <b>${e}</b>. please open it and click the button inside to confirm your subscription.`;
  const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (e == ''){
    alert('please fill in the form')
  } else if (e.match(emailregex)==null){
    alert('please enter a valid email')
  } else {
    document.getElementById('message').innerHTML = msg;
    document.getElementById('input_card').style.display = "none";
    document.getElementById('success').style.display = "block";

  }
}