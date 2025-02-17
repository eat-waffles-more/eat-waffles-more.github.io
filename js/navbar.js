/*document.addEventListener("DOMContentLoaded", function() {
  const defaultAvatar = "/images/user.png";
  let userAvatar = null;
  const avatarUrl = userAvatar ? userAvatar : defaultAvatar;
  const navbarHTML = `<div class="navbar">
    <div class="left">
      <a href="/home" class="logo">
        <img src="https://codehs.com/uploads/fbd97756d141592f86710a5e655b8a4b" alt="Waffles Logo" class="waffleimg" height="50" width="50">
      </a>
      <nav class="navbar-links">
        <a href="/home"><i class="fa fa-home fa-lg"></i></a>
        <a href="/games"><i class="fa fa-gamepad fa-lg"></i></a>
        <a href="/music"><i class="fa fa-music fa-lg"></i></a>
        <a href="/theater"><i class="fa fa-tv fa-lg"></i></a>
        <a href="/forms"><i class="fa fa-clipboard-list fa-lg"></i></a>
        <a href="/reviews"><i class="fa fa-star fa-lg"></i></a>
        <a href="/contact" class="margin"><i class="fa fa-user fa-lg"></i></a>
      </nav>
    </div>
    <div class="right">
      <a href="/profile" class="user-profile">
        <img id="user-avatar" src="${avatarUrl}" alt="" class="avatar">
        <span id="user-name">Sign Up</span>
      </a>
    </div>
  </div>`;
  document.getElementById('navbar-container').innerHTML = navbarHTML;
});
*/
document.addEventListener('DOMContentLoaded', () => {
  // Check for a logged-in user in localStorage
  const defaultAvatar = "/images/faavicon.png";
  let userAvatar = null;
  const avatarUrl = userAvatar ? userAvatar : defaultAvatar;
  // Construct the navbar HTML
  const navbarHTML = `
    <nav class="navbar">
      <!-- Left section: Logo and navigation links -->
      <div class="nav-left-bg">
        <a href="/index.html" class="logo">
          <img src="https://codehs.com/uploads/fbd97756d141592f86710a5e655b8a4b" alt="Waffles Logo">
        </a>
        <div class="nav-links">
          <a href="/home"><i class="fa fa-home fa-lg"></i></a>
        <a href="/games"><i class="fa fa-gamepad fa-lg"></i></a>
        <a href="/music"><i class="fa fa-music fa-lg"></i></a>
        <a href="/theater"><i class="fa fa-tv fa-lg"></i></a>
        <a href="/forms"><i class="fa fa-clipboard-list fa-lg"></i></a>
        <a href="/reviews"><i class="fa fa-star fa-lg"></i></a>
        <a href="/contact" class="margin"><i class="fa fa-user fa-lg"></i></a>
      </div>
      </div>
      <!-- Right section: Profile information -->
      <div class="nav-right-bg">
    <a href="/profile" class="user-profile">
        <img id="user-avatar" src="${avatarUrl}" alt="" class="avatar">
        <span id="user-name">Sign Up</span>
      </a>
      </div>
    </nav>
  `;

  // Inject the navbar at the very top of the body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);
});
