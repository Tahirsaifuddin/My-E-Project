 function signup(event) {
      event.preventDefault(); // stops page reload

      let fullName = document.getElementById("fullname").value.trim();
      let email = document.getElementById("email").value.trim();
      let pass = document.getElementById("password").value.trim();
      let repass = document.getElementById("repassword").value.trim();

      if (email === "" || pass === "" || fullName === "" || repass === "") {
        alert("Please fill in all fields!");
        return;
      }

      if (pass !== repass) {
        alert("Passwords do not match!");
        return;
      }

      // Save data to localStorage
      localStorage.setItem("fullname", fullName);
      localStorage.setItem("email", email);
      localStorage.setItem("password", pass);

      alert("Account created successfully!");
      window.location.href = "login.html";
    }