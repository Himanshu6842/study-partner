const BASE_URL = "https://study-partner-backend-eiss.onrender.com";

// ================= SIGNUP =================
async function signup() {
  try {
    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
      alert("Please fill all fields ❌");
      return;
    }

    const res = await fetch(BASE_URL + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    });

    const data = await res.json();

    alert(data.message);

  } catch (err) {
    alert("Error: " + err);
  }
}


// ================= LOGIN =================
async function login() {
  try {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (!email || !password) {
      alert("Please fill all fields ❌");
      return;
    }

    const res = await fetch(BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login Successful ✅");

      // redirect
      window.location.href = "dashboard.html";
    } else {
      alert(data.message || "Login failed ❌");
    }

  } catch (err) {
    alert("Error: " + err);
  }
}


// ================= LOGOUT =================
function logout() {
  localStorage.removeItem("token");
  alert("Logged out 👋");
  window.location.href = "index.html";
}