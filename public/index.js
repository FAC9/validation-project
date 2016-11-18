// endpoint is /signup
var submit_button = document.getElementById('btn_submit');
var signup_message = document.getElementById('signup_message');

submit_button.addEventListener('click', function() {
  var userid = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  var url = '/signup?userid=' + userid + '&password=' + password;
  signup_message.textContent = "";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log(xhr.response);
    if (xhr.readyState === 4 && xhr.status == 200) {
        signup_message.textContent = 'Account created, check your emails to verify your account.'
    }
    else {
      var json = JSON.parse(xhr.response);
       signup_message.textContent = 'Error: ' + 'Invalid ' + json.validation.keys[0] + '. Userid must be an email address, password must be at least 6 characters, one lowercase, one uppercase and one digit'
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
})
