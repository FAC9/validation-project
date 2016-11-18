// endpoint is /signup
console.log("into index.js")
var submit_button = document.getElementById('btn_submit');
var signup_message = document.getElementById('signup_message');

submit_button.addEventListener('click', function() {
  var userid = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  console.log('click');
  var url = '/signup?userid=' + userid + '&password=' + password;
  signup_message.textContent = "";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status == 200) {
      console.log("received successful response");
        signup_message.textContent = 'Account created, check your emails to verify your account.'
    }
    else {
      console.log("received error ");
      console.log(xhr.response);
       signup_message.textContent = 'Error: Username must be an email address, password must be at least 6 characters, one lowercase, one uppercase and one digit'
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
})
