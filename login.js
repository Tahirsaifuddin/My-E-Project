  function login(event) {
      event.preventDefault(); // Prevent page refresh

      let user = document.getElementById("email").value.trim();
      let pass = document.getElementById("password").value.trim();

      let savedUser = localStorage.getItem("email");
      let savedPass = localStorage.getItem("password");

      if (user === "" || pass === "") {
        alert("Please enter both email and password!");
        return;
      }

      if (user === savedUser && pass === savedPass) {
        alert("Login successful!");
        window.location.href = "homepage.html";
      } else {
        alert("Account not found! Please create one.");
      }
    }