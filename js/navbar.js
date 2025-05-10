// Navbar.js: To handle the avatar and name display
document.addEventListener('DOMContentLoaded', () => {
  const defaultAvatar = "/images/favicon.png";
  let userAvatar = localStorage.getItem('avatar');
  const avatarUrl = userAvatar ? userAvatar : defaultAvatar;

  // Navbar HTML
  const navbarHTML = `
    <nav class="navbar">
      <div class="nav-left-bg">
        <a href="/index.html" class="logo">
          <img src="/images/favicon.png" alt="Waffles Logo">
        </a>
        <div class="nav-links">
          <a href="/home"><i class="fa fa-home fa-lg"></i></a>
          <a href="/games"><i class="fa fa-gamepad fa-lg"></i></a>
          <a href="/theater.html"><i class="fa fa-tv fa-lg"></i></a>
          <a href="/forms"><i class="fa fa-clipboard-list fa-lg"></i></a>
          <a href="/reviews"><i class="fa fa-star fa-lg"></i></a>
          <a href="/profile"><i class="fa fa-user fa-lg"></i></a>
          <a href="javascript:void(0);" class="extra"><i class="fa fa-plus fa-lg"></i></a>
          <div class="extra-buttons">
            <a target="_blank" href="https://github.com/eat-waffles-more"><i class="fa-brands fa-github fa-lg"></i></a>
            <a href="/terms"><i class="fa-solid fa-clipboard-check"></i></a>
            <a href="/privacy"><i class="fa-solid fa-user-lock"></i></a>
            <a href="/contact"><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>

      <div class="nav-center" style="flex-grow: 1; display: flex; justify-content: center;">
        <input type="text" id="searchBar" placeholder="Search this site..." autocomplete="off">
      </div>

      <div class="nav-right-bg">
        <a href="/profile" class="user-profile">
          <img id="user-avatar" src="${avatarUrl}" alt="" class="avatar" style="height: 40px; width: 40px; border-radius: 50%;">
          <span id="user-name">${localStorage.getItem('name') || 'Sign Up'}</span>
        </a>
      </div>
    </nav>
    <div id="results"></div>
  `;

  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Search functionality
  const filesWithTags = [
    { path: "/home", name: "Home Page", tags: ["home", "main", "start"] },
    { path: "/games", name: "Games", tags: ["play", "fun", "games"] },
    { path: "/reviews", name: "Reviews", tags: ["star", "reviews"] },
    { path: "/profile", name: "Your Profile", tags: ["profile"] },
    { path: "/terms", name: "Terms", tags: ["terms"] },
    { path: "/privacy", name: "Privacy", tags: ["privacy"] },
  ];

  document.getElementById('searchBar').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    if (query.trim() === '') {
      resultsDiv.classList.remove('active');
      return;
    }

    const matchedFiles = filesWithTags.filter(file =>
      file.tags.some(tag => tag.includes(query))
    );

    if (matchedFiles.length === 0) {
      resultsDiv.innerHTML = '<p>No results found.</p>';
    } else {
      matchedFiles.forEach(file => {
        const link = document.createElement('a');
        link.href = file.path;
        link.textContent = file.name;
        resultsDiv.appendChild(link);
      });
    }

    resultsDiv.classList.add('active');
  });
});
