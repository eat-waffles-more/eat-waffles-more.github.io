document.addEventListener('DOMContentLoaded', () => {
      const defaultAvatar = "/images/favicon.png";
      const userAvatar = null; // Replace with logic to dynamically set avatar
      const avatarUrl = userAvatar || defaultAvatar;

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

          <div class="nav-center">
            <input type="text" id="searchBar" placeholder="Search this site..." autocomplete="off">
          </div>

          <div class="nav-right-bg">
            <a href="/profile" class="user-profile">
              <img id="user-avatar" src="${avatarUrl}" alt="User Avatar" class="avatar">
              <span id="user-name">Sign Up</span>
            </a>
          </div>
        </nav>
        <div id="results"></div>
      `;

      document.body.insertAdjacentHTML('afterbegin', navbarHTML);

      // Adding the active class to trigger animation for navbar
      setTimeout(() => {
        document.querySelector('.navbar').classList.add('active');
      }, 100); // Add delay for smooth animation

      const extraIcon = document.querySelector('.extra');
      const extraButtons = document.querySelector('.extra-buttons');

      extraButtons.classList.remove('active');
      extraIcon.innerHTML = '<i class="fa fa-plus fa-lg"></i>';

      extraIcon.addEventListener('click', () => {
        extraButtons.classList.toggle('active');
        extraIcon.innerHTML = extraButtons.classList.contains('active')
          ? '<i class="fa fa-minus fa-lg"></i>'
          : '<i class="fa fa-plus fa-lg"></i>';
      });

      const filesWithTags = [
        { path: "/home", name: "Home Page", tags: ["home", "main", "start", "front", "page", "index"] },
        { path: "/games", name: "Games", tags: ["play", "fun", "games", "game", "page", "yay"] },
        { path: "/reviews", name: "Reviews", tags: ["star", "reviews", "review", "rate", "us", "page", "share", "your", "my", "thoughts"] },
        { path: "/profile", name: "Your Profile", tags: ["you", "your", "profile", "account", "edit", "my", "me", "page"] },
        { path: "/terms", name: "Terms of Service", tags: ["rules", "terms", "of", "and", "conditions", "page", "service", "legal", "licence"] },
        { path: "/privacy", name: "Privacy Policy", tags: ["your", "safe", "safety", "privacy", "policy", "private", "information", "info", "security", "page"] },
      ];

      const searchBar = document.getElementById('searchBar');
      const resultsDiv = document.getElementById('results');

      searchBar.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsDiv.innerHTML = '';

        if (!query) {
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
            link.href = file.path;
            link.textContent = file.name;
            resultsDiv.appendChild(link);
          });
        }

        resultsDiv.classList.add('active');
      });

      window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        navbar.style.boxShadow = window.scrollY > 10
          ? '0 2px 20px rgba(0, 0, 0, 0.3)'
          : '0 0 10px rgba(173, 216, 230, 0.5)';
      });
    });
