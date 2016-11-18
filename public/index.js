// endpoint is /signup
console.log("into index.js")
var username = document.getElementById('username').value;
var password = document.getElementById('password').value;
var submit_button = document.getElementById('btn_submit');
var signup_message = document.getElementById('signup_message').textContent;

submit_button.addEventListener('click', function() {
  console.log('click');
  var url = '/signup?username=' + username + '&password=' + password;
  // signup_message = "";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
      console.log("received successful response");
        signup_message = 'Account created, check your emails to verify your account.'
    }
    else {
      console.log("received error ");
       signup_message = 'Error: Username must be an email address, password must contain 6-10 characters, at least one capital letter, one digit and no symbols.'
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
})
