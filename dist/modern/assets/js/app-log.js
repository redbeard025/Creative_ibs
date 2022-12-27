  //login function
  var loginFunction = function(event) {
      event.preventDefault();

      var user = {};
      user['username'] = document.getElementById('username').value;
      user['password'] = document.getElementById('password').value;
      var opc = document.getElementById('rememberMe').checked;
      console.log(user);

      fetch('http://10.146.1.178:10032/api/v0/authservice', {
          method: 'post',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          body: JSON.stringify(user)
      }).then(function(response) {
          return response.json();
      }).then(function(data) {
          console.log(user);
          document.getElementById("loginForm").reset();
          document.getElementById('message').innerHTML = data['message'];
          if (data['success'] == true) {
              if (opc == true) {
                  setCookie("username", user['username'], 1);
              } else {
                  setCookie("username", user['username'], );
              }
              window.location.assign("http://10.146.1.178:10032/pages/dashboard.html")
          }

      });

  };
  document.getElementById("loginForm").addEventListener("submit", loginFunction, true);



  function setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
      let expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }


  function getCookie(cname) {
      let name = cname + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }

  function checkCookie() {
      let user = getCookie("username");
      if (user != "") {
          window.location.assign("http://10.146.1.178:10032/pages/dashboard.html")
      } else {
          if (user == "" && user != null) {
              window.location.assign("pages-login.html")

          }
      }
  }

  function loadDoc() {
      var url = "http://10.146.1.178:10032/cgi/SATWEB/B"
      var obj = {};
      obj['numced'] = document.getElementById('inpp').value;
      if (document.getElementById("inpp").value.lenght < 10) {
          for (let i = 0; i < document.getElementById("inpp").value.lenght; i++) {
              document.getElementById("inpp").value += document.getElementById("inpp").value + " ";
          }
      }
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              document.getElementById("EmpId").innerHTML =
                  this.responseText;
              document.getElementById("formSerach").reset();
              document.getElementById("Empcd").innerHTML = '';
          }
      };
      xhttp.open("POST", url, true);
      xhttp.setRequestHeader('Content-Type', 'application/json');
      xhttp.send(JSON.stringify(obj));
  }

  function getValue(id) {

      let param = document.getElementById("T" + id).value;
      var url = "http://10.146.1.178:10032/cgi/SATCCLI/D";
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {

              document.getElementById("modaldat").innerHTML =
                  this.responseText;
              // Get the modal
              var modal = document.getElementById("myModal");

              // Get the button that opens the modal
              var btn = document.getElementsByClassName(id + "myBtn");

              // Get the <span> element that closes the modal
              var span = document.getElementsByClassName("close")[0];


              // When the user clicks the button, open the modal 

              modal.style.display = "block";


              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                  modal.style.display = "none";
              }



              // When the user clicks anywhere outside of the modal, close it
              window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }


          }


      };



      xhr.open("POST", url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(param);



  }

  function loadDoch(Clicked_id) {
      let element = document.getElementById("T" + Clicked_id);
      let hidden = element.getAttribute("hidden");
      element.setAttribute("hidden");
  }

  function loadDoc1() {

      var url = "http://10.146.1.178:10032/cgi/SATCCLI/T" + document.getElementById("theInp").innerHTML;
      if (document.getElementById("theInp").innerHTML.lenght < 10) {
          for (let i = 0; i < document.getElementById("theInp").innerHTML.lenght; i++) {
              document.getElementById("theInput").innerHTML += document.getElementById("theInp").innerHTML + " ";
          }
      }
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              document.getElementById("Empcd").innerHTML =
                  this.responseText;

          }
      };

      xhttp.open("GET", url, true);
      xhttp.send();
  }

  function busd(value) {
      var tj = document.getElementById("tcv").innerHTML;
      var moned = value;
      var url = "http://10.146.1.178:10032/cgi/SATCCLI/U";
      var button = document.getElementById("busd");
      let obj = tj + moned;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              document.getElementById("modaldat1").innerHTML =
                  this.responseText;
              // Get the modal
              var modal = document.getElementById("myModal");
              modal.style.display = "none";
              var modal = document.getElementById("myModal1");
              modal.style.display = "block";
              // Get the <span> element that closes the modal
              var span = document.getElementsByClassName("close")[1];
              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                      var modal = document.getElementById("myModal1");
                      modal.style.display = "none";
                      var modal = document.getElementById("myModal");
                      modal.style.display = "block";
                  }
                  // When the user clicks anywhere outside of the modal, close it
              window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }
          }
      };
      xhr.open("POST", url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(obj);

  }

  function bdop(value) {
      var tj = document.getElementById("tcv").innerHTML;
      var moned = value;
      var url = "http://10.146.1.178:10032/cgi/SATCCLI/U";
      var button = document.getElementById("BDOP");
      let obj = tj + moned;
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
              document.getElementById("modaldat1").innerHTML =
                  this.responseText;

              // Get the modal
              var modal = document.getElementById("myModal");
              modal.style.display = "none";
              var modal = document.getElementById("myModal1");
              modal.style.display = "block";
              // Get the <span> element that closes the modal
              var span = document.getElementsByClassName("close")[1];
              // When the user clicks on <span> (x), close the modal
              span.onclick = function() {
                      var modal = document.getElementById("myModal1");
                      modal.style.display = "none";
                      var modal = document.getElementById("myModal");
                      modal.style.display = "block";
                  }
                  // When the user clicks anywhere outside of the modal, close it
              window.onclick = function(event) {
                  if (event.target == modal) {
                      modal.style.display = "none";
                  }
              }
          }
      };
      xhr.open("POST", url, true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(obj);
  }