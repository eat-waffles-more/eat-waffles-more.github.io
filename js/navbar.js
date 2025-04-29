document.addEventListener('DOMContentLoaded', () => {
  // Check for a logged-in user in localStorage
  const defaultAvatar = "/images/favicon.png";
  let userAvatar = null; // You can replace this with your user loading logic
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
          <a href="/theater"><i class="fa fa-tv fa-lg"></i></a>
          <a href="/forms"><i class="fa fa-clipboard-list fa-lg"></i></a>
          <a href="/reviews"><i class="fa fa-star fa-lg"></i></a>
          <a href="/profile"><i class="fa fa-user fa-lg"></i></a>
          <a href="javascript:void(0);" class="extra"><i class="fa fa-plus fa-lg"></i></a>
          <div class="extra-buttons" style="display: none;">
            <a target="_blank" href="https://github.com/eat-waffles-more"><i class="fa-brands fa-github fa-lg"></i></a>
            <a href="/terms"><i class="fa-solid fa-clipboard-check"></i></a>
            <a href="/privacy"><i class="fa-solid fa-user-lock"></i></a>
            <a href="/contact"><i class="fa-solid fa-envelope"></i></a>
          </div>
        </div>
      </div>

      <!-- Middle section: Search bar -->
      <div class="nav-center" style="flex-grow: 1; display: flex; justify-content: center;">
        <input type="text" id="searchBar" placeholder="Search this site...">
      </div>

      <!-- Right section: Profile information -->
      <div class="nav-right-bg">
        <a href="/profile" class="user-profile">
          <img id="user-avatar" src="${avatarUrl}" alt="" class="avatar" style="height: 40px; width: 40px; border-radius: 50%;">
          <span id="user-name">Sign Up</span>
        </a>
      </div>
    </nav>
    <div id="results"></div>
  `;

  // Inject the navbar at the very top of the body
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // NOW the navbar and #results exist
  const resultsDiv = document.getElementById('results');
  resultsDiv.style.display = 'none'; // Hide initially

  const extraIcon = document.querySelector('.extra');
  const extraButtons = document.querySelector('.extra-buttons');

  // Toggle extra buttons when clicking the '+' icon
  extraIcon.addEventListener('click', () => {
    if (extraButtons.style.display === 'none') {
      extraButtons.style.display = 'flex';
      extraIcon.innerHTML = '<i class="fa fa-minus fa-lg"></i>';
    } else {
      extraButtons.style.display = 'none';
      extraIcon.innerHTML = '<i class="fa fa-plus fa-lg"></i>';
    }
  });

  // Example files and tags for search functionality
  const filesWithTags = [
    { filename: "home", tags: ["home", "main", "start", "front"] },
    { filename: "games", tags: ["play", "fun", "games", "game"] },
    { filename: "reviews", tags: ["star", "reviews", "review", "rate", "us"] },
    { filename: "theater", tags: ["movies", "theater", "watch", "shows"] },
    { filename: "forms", tags: ["forms", "feedback", "contact", "submit"] },
    { filename: "profile", tags: ["user", "profile", "account", "settings"] }
  ];

  // Search bar logic
  document.getElementById('searchBar').addEventListener('input', function(e) {
    const query = e.target.value.toLowerCase();
    resultsDiv.innerHTML = '';

    if (query.trim() === '') {
      resultsDiv.style.display = 'none'; // Hide results if search bar is empty
      return;
    }

    const matchedFiles = filesWithTags.filter(file =>
      file.tags.some(tag => tag.includes(query))
    );

    if (matchedFiles.length === 0) {
      resultsDiv.innerHTML = '<p style="padding: 10px;">No results found.</p>';
    } else {
      matchedFiles.forEach(file => {
        const link = document.createElement('a');
        link.href = file.filename + ".html";
        link.textContent = file.filename;
        resultsDiv.appendChild(link);
      });
    }

    resultsDiv.style.display = 'block'; // Always show results if there is a query
  });
});
