document.addEventListener('DOMContentLoaded', () => {
  // Default avatar handling
  const defaultAvatar = "/images/favicon.png";
  let userAvatar = null;
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
          <a href="/theater"><i class="fa fa-tv fa-lg"></i></a>
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
        <input type="text" id="searchBar" placeholder="Search this site...">
      </div>

      <div class="nav-right-bg">
        <a href="/profile" class="user-profile">
          <img id="user-avatar" src="${avatarUrl}" alt="" class="avatar" style="height: 40px; width: 40px; border-radius: 50%;">
          <span id="user-name">Sign Up</span>
        </a>
      </div>
    </nav>
    <div id="results"></div>
  `;

  // Add navbar to page
  document.body.insertAdjacentHTML('afterbegin', navbarHTML);

  // Extra buttons show/hide toggle
  const extraIcon = document.querySelector('.extra');
  const extraButtons = document.querySelector('.extra-buttons');

  extraButtons.style.display = 'none';
  extraIcon.innerHTML = '<i class="fa fa-plus fa-lg"></i>';

  extraIcon.addEventListener('click', () => {
    if (extraButtons.style.display === 'none' || extraButtons.style.display === '') {
      extraButtons.style.display = 'flex';
      extraIcon.innerHTML = '<i class="fa fa-minus fa-lg"></i>';
    } else {
      extraButtons.style.display = 'none';
      extraIcon.innerHTML = '<i class="fa fa-plus fa-lg"></i>';
    }
  });

  // --- Search functionality ---
  const filesWithTags = [
    { filename: "home", tags: ["home", "main", "start", "front"] },
    { filename: "games", tags: ["play", "fun", "games", "game"] },
    { filename: "reviews", tags: ["star", "reviews", "review", "rate", "us"] },
    { filename: "profile", tags: ["you", "your", "profile", "account", "edit", "my", "me"] },
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
      resultsDiv.innerHTML = '<p style="padding: 10px;">No results found.</p>';
    } else {
      matchedFiles.forEach(file => {
        const link = document.createElement('a');
        link.href = file.filename + ".html";
        link.textContent = file.filename;
        link.style.display = 'block';
        link.style.padding = '10px';
        link.style.borderBottom = '1px solid #eee';
        resultsDiv.appendChild(link);
      });
    }

    // Slide down animation
    resultsDiv.classList.add('active');
  });
});
