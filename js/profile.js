const API_URL = "https://waffles-database.vercel.app/api/users";

            // Signup form submission
            document.getElementById("signup-form").addEventListener("submit", async (e) => {
                e.preventDefault();
                const username = document.getElementById("username").value;
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;

                const res = await fetch(`${API_URL}/register`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ username, email, password })
                });

                const data = await res.json();
                if (res.ok) {
                    alert("Account created! Your ID: " + data.id);
                    // You can save data.id or other user info in localStorage or cookies
                } else {
                    alert("Error: " + (data.message || res.status));
                }
            });

            // Login form submission
            document.getElementById("login-form").addEventListener("submit", async (e) => {
                e.preventDefault();
                const email = document.getElementById("login-email").value;
                const password = document.getElementById("login-password").value;

                const res = await fetch(`${API_URL}/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email, password })
                });

                const data = await res.json();
                if (res.ok) {
                    alert("Welcome " + data.username);
                    // Save user data (ID, token, etc.) in localStorage or sessionStorage
                    localStorage.setItem("userId", data.id);
                } else {
                    alert("Login failed.");
                }
            });

            // Profile management
            window.onload = function() {
                const avatar = localStorage.getItem('avatar');
                const name = localStorage.getItem('name');
                if (avatar) {
                    document.getElementById('user-avatar').src = avatar;
                } else {
                    document.getElementById('user-avatar').src = '/images/user.png'; // Default avatar
                }
                if (name) {
                    document.getElementById('user-name').innerText = name;
                }
            };

            function saveProfile() {
                const avatarUrl = document.getElementById('avatar-url').value;
                const avatarFile = document.getElementById('avatar-file').files[0];
                const name = document.getElementById('user-name-input').value;

                if (avatarFile) {
                    const reader = new FileReader();
                    reader.onloadend = function() {
                        localStorage.setItem('avatar', reader.result);
                        document.getElementById('user-avatar').src = reader.result;
                    };
                    reader.readAsDataURL(avatarFile);
                } else if (avatarUrl) {
                    localStorage.setItem('avatar', avatarUrl);
                    document.getElementById('user-avatar').src = avatarUrl;
                }

                localStorage.setItem('name', name);
                document.getElementById('user-name').innerText = name;
            }
