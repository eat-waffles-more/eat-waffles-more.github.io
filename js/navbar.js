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
          <img src="/images/favicon.png" alt="Waffles Logo">
        </a>
        <div class="nav-links">
          <a href="/home"><i class="fa fa-home fa-lg"></i></a>
        <a href="/games"><i class="fa fa-gamepad fa-lg"></i></a>
        <a href="/music"><i class="fa fa-music fa-lg"></i></a>
        <a href="/theater"><i class="fa fa-tv fa-lg"></i></a>
        <a href="/forms"><i class="fa fa-clipboard-list fa-lg"></i></a>
        <a href="/reviews"><i class="fa fa-star fa-lg"></i></a>
        <a href="/contact" class="margin"><i class="fa fa-user fa-lg"></i></a>
        <a href="/plus"><i class="fa-solid fa-user-plus"></i></a>
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
