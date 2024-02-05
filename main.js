function redirect() {
  var e = document.getElementById('email').value;
  var lbl = document.querySelector('label');
  var input = document.querySelector('input')
  var msg = `a confirmation emal has been sent to <b>${e}</b>. please open it and click the button inside to confirm your subscription.`;
  const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (e == ''){
    lbl.dataset.msg = 'please fill in the form';
    input.style.backgroundColor = 'rgba(255, 0, 0, 0.099)'
  } else if (e.match(emailregex)==null){
    lbl.dataset.msg = 'please enter a valid email';
    input.style.backgroundColor = 'rgba(255, 0, 0, 0.099)'
  } else {
    document.getElementById('message').innerHTML = msg;
    document.getElementById('input_card').style.display = "none";
    document.getElementById('success').style.display = "block";
  }
}