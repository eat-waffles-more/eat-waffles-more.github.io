window.onload = async function () {
  const email = localStorage.getItem('email');
  if (!email) return;

  try {
    const res = await fetch(`/profile/${email}`);
    if (!res.ok) {
      console.error('Failed to fetch profile');
      return;
    }

    const { name, avatar } = await res.json();
    document.getElementById('user-name').innerText = name;
    document.getElementById('user-avatar').src = avatar || '/images/user.png';
  } catch (error) {
    console.error('Error loading profile:', error);
  }
};

// Opens the profile editing modal
function editProfile() {
  document.getElementById('profile-modal').style.display = 'block';
  document.getElementById('avatar-url').value = document.getElementById('user-avatar').src;
  document.getElementById('user-name-input').value = document.getElementById('user-name').innerText;
}

// Saves the edited profile to the server
function saveProfile() {
  const avatarUrl = document.getElementById('avatar-url').value;
  const avatarFile = document.getElementById('avatar-file').files[0];
  const name = document.getElementById('user-name-input').value;
  const email = localStorage.getItem('email');

  if (!email) {
    alert('User not logged in.');
    return;
  }

  if (avatarFile) {
    const reader = new FileReader();
    reader.onloadend = function () {
      const avatarData = reader.result;
      updateProfile(email, name, avatarData);
    };
    reader.readAsDataURL(avatarFile);
  } else {
    updateProfile(email, name, avatarUrl);
  }
}

// Sends profile data to the server
async function updateProfile(email, name, avatar) {
  try {
    const res = await fetch(`/profile/${email}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, avatar })
    });

    if (!res.ok) {
      const { error } = await res.json();
      alert(`Failed to update profile: ${error}`);
      return;
    }

    document.getElementById('user-name').innerText = name;
    document.getElementById('user-avatar').src = avatar || '/images/user.png';
    closeModal();
  } catch (error) {
    console.error('Error updating profile:', error);
  }
}

// Closes the modal
function closeModal() {
  document.getElementById('profile-modal').style.display = 'none';
}

// Optional: Login function to set email in localStorage
async function login(email, password) {
  try {
    const res = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    localStorage.setItem('email', email);
    alert(data.message);
    window.location.reload(); // Reload to fetch profile
  } catch (error) {
    console.error('Login error:', error);
  }
}
