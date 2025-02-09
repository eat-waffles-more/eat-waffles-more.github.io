// Get DOM elements
const userProfile = document.getElementById('userProfile');
const usernameElem = document.getElementById('username');
const userAvatarElem = document.getElementById('userAvatar');
const profilePage = document.getElementById('profilePage');
const saveProfileBtn = document.getElementById('saveProfile');
const newUsernameInput = document.getElementById('newUsername');
const newAvatarInput = document.getElementById('newAvatar');

// Check localStorage for user data
window.onload = () => {
    const storedUsername = localStorage.getItem('username');
    const storedAvatar = localStorage.getItem('avatar');

    if (storedUsername) {
        usernameElem.textContent = storedUsername;
    }
    if (storedAvatar) {
        userAvatarElem.src = storedAvatar;
    }
};

// Toggle profile page visibility
userProfile.addEventListener('click', () => {
    profilePage.classList.toggle('show');
});

// Save profile data to localStorage
saveProfileBtn.addEventListener('click', () => {
    const newUsername = newUsernameInput.value;
    const newAvatar = newAvatarInput.files[0];

    if (newUsername) {
        localStorage.setItem('username', newUsername);
        usernameElem.textContent = newUsername;
    }

    if (newAvatar) {
        const reader = new FileReader();
        reader.onload = function(event) {
            localStorage.setItem('avatar', event.target.result);
            userAvatarElem.src = event.target.result;
        };
        reader.readAsDataURL(newAvatar);
    }

    // Hide profile page after saving
    profilePage.classList.add('hidden');
});
