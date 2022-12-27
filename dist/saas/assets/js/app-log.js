function checkAuth() {
    var user = {};
    var username = document.getElementById('username').value;
    user['username'] = document.getElementById('username').value;
    user['password'] = document.getElementById('password').value;
    user['token'] = getCookie('JSESSIONID');
    var opc = document.getElementById('rememberMe').checked;
    sessionStorage.setItem("currentloggedin", username);
    localStorage.setItem('user', JSON.stringify(user));

    console.log(user);

    fetch('http://192.168.0.175/api/v0/authservice', {
        method: 'post',
        headers: new Headers({ "Content-Type": "application/json" }),
        body: JSON.stringify(user)
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        console.log(user);
        document.getElementById("loginForm").reset();
        document.getElementById('message').innerHTML = data['message'];
        if (data['success'] == true) {
            console.log('Loged in');
        } else {
            console.log('User not Valid');
        }
    });
};