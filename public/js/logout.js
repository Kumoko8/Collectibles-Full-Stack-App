const logout = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    alert("Logout successful. Join us again soon!")
  } else {
    alert("Failed to log out.");
  }
};

document.querySelector("#logout").addEventListener("click", logout);
