   //login function
   var loginFunction = function(event) {
       event.preventDefault();
       var user = {};
       username = document.getElementById('username').value;
       user['username'] = document.getElementById('username').value;
       user['password'] = document.getElementById('password').value;
       var opc = document.getElementById('rememberMe').checked;
       sessionStorage.setItem("currentloggedin", username);
       localStorage.setItem('user', JSON.stringify(user));

       console.log(user);



   };
   document.getElementById("loginForm").addEventListener("submit", loginFunction, true);