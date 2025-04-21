document.addEventListener('DOMContentLoaded', function () {
    const buttons = [
        { name: '2048', image: '/images/2048.png', link: 'https://www.hoodamath.com/mobile/games/2048/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Snow Rider', image: '/images/snowrider.png', link: 'https://www.hoodamath.com/mobile/games/snow-rider-3d/game.html?nocheckorient=1"', path: '/play', favorite: false },
        { name: 'OvO', image: '/images/ovo.png', link: 'https://www.hoodamath.com/mobile/games/ovo/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Geometry Dash', image: '/images/geometrydash.png', link: 'https://www.hoodamath.com/mobile/games/geometry-dash/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Tiny Fishing', image: '/images/tinyfishing.png', link: 'https://www.hoodamath.com/mobile/games/hooda-tiny-fishing/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Guess Word', image: '/images/guessword.png', link: 'https://www.hoodamath.com/mobile/games/guess-word/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Draw to Smash', image: '/images/drawtosmash.png', link: 'https://www.hoodamath.com/mobile/games/draw-to-smash/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Slice It', image: '/images/sliceit.png', link: 'https://www.hoodamath.com/mobile/games/hooda-slice-it/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Rodha', image: '/images/rodha.png', link: 'https://www.hoodamath.com/mobile/games/rodha/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Swing Monkey', image: '/images/swingmonkey.png', link: 'https://www.hoodamath.com/mobile/games/swing-monkey/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: '8 Ball Pool', image: '/images/8ballpool.png', link: 'https://www.hoodamath.com/mobile/games/8-ball-pool/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Wheelie Bike', image: '/images/wheeliebike.png', link: 'https://www.hoodamath.com/mobile/games/wheelie-bike/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Drift Hunters', image: '/images/drifthunters.png', link: 'https://www.hoodamath.com/mobile/games/drift-hunters/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Taxi Driver 3d', image: '/images/taxidriver3d.png', link: 'https://www.hoodamath.com/mobile/games/taxi-driver-3d/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Duck Life', image: '/images/ducklife.png', link: 'https://www.hoodamath.com/mobile/games/duck-life/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Duck Life 2', image: '/images/ducklife2.png', link: 'https://www.hoodamath.com/mobile/games/duck-life-2-world-champion/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Duck Life 3', image: '/images/ducklife3.png', link: 'https://www.hoodamath.com/mobile/games/duck-life-3-evolution/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Duck Life 4', image: '/images/ducklife4.png', link: 'https://www.hoodamath.com/mobile/games/duck-life-4/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Duck Life 6', image: '/images/ducklife6.png', link: 'https://www.hoodamath.com/mobile/games/duck-life-6-space/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: "Low's Adventures", image: '/images/lowsadventures.png', link: 'https://www.hoodamath.com/mobile/games/lows-adventures/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: "Low's Adventures 2", image: '/images/lowsadventures2.png', link: 'https://www.hoodamath.com/mobile/games/lows-adventures-2/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: "Low's Adventures 3", image: '/images/lowsadventures3.png', link: 'https://www.hoodamath.com/mobile/games/lows-adventures-3/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Draw the Rest', image: '/images/drawtherest.png', link: 'https://www.hoodamath.com/mobile/games/draw-the-rest/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Car Rush', image: '/images/carrush.png', link: 'https://www.hoodamath.com/mobile/games/car-rush/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Opposite Day', image: '/images/oppositeday.png', link: 'https://www.hoodamath.com/mobile/games/opposite-day/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Wordle', image: '/images/wordle.png', link: 'https://wordleunlimited.org/#google_vignette', path: '/play', favorite: false },
        { name: 'Helix Jump', image: '/images/helixjump.png', link: 'https://www.hoodamath.com/mobile/games/helix-jump/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Are you Human?', image: '/images/areyouhuman.png', link: 'https://www.hoodamath.com/mobile/games/are-you-human/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Ball Blast', image: '/images/ballblast.png', link: 'https://scratch.mit.edu/projects/472077983/embed', path: '/play', favorite: false },
        { name: 'Simon', image: '/images/simongame.png', link: 'https://scratch.mit.edu/projects/20016532/embed', path: '/play', favorite: false },
        { name: 'Speed Cube', image: '/images/speedcube.png', link: 'https://www.hoodamath.com/mobile/games/speed-cube/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Pig Clicker', image: '/images/pigclicker.png', link: '/games/pig-clicker', path: '/play', favorite: false },

    ];

    const buttonContainer = document.getElementById('buttonContainer');
    const searchInput = document.getElementById('search');
    const counterDisplay = document.getElementById('counterDisplay');
    const sortOptions = document.getElementById('sortOptions');

    let showClickCounts = false;

    // Function to get the click count for a specific button from localStorage
    function getClickCount(buttonName) {
        const count = localStorage.getItem(buttonName);
        return count ? parseInt(count) : 0;
    }

    // Function to set the click count for a specific button in localStorage
    function setClickCount(buttonName, count) {
        localStorage.setItem(buttonName, count);
    }

    // Function to get the favorite status of a button from localStorage
    function getFavoriteStatus(buttonName) {
        const status = localStorage.getItem(buttonName + '_favorite');
        return status === 'true';
    }

    // Function to set the favorite status of a button in localStorage
    function setFavoriteStatus(buttonName, status) {
        localStorage.setItem(buttonName + '_favorite', status);
    }

    // Function to toggle the favorite status
    function toggleFavorite(button) {
        button.favorite = !button.favorite;
        setFavoriteStatus(button.name, button.favorite);
        renderButtons(searchInput.value, sortOptions.value); // Re-render to update the order
    }

    // Function to create each button
    function createButton(button) {
        const a = document.createElement('a');
        a.className = 'menu-button';
        a.href = button.path;

        let count = getClickCount(button.name);

        const img = document.createElement('img');
        img.src = button.image;
        a.appendChild(img);

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerText = button.name;
        a.appendChild(overlay);

        const popUp = document.createElement('div');
        popUp.className = 'popup';
        popUp.innerText = `Clicked: ${count} clicks`;
        a.appendChild(popUp);

        const favoriteIcon = document.createElement('span');
        favoriteIcon.className = 'favorite-icon';
        favoriteIcon.innerText = button.favorite ? '★' : '☆'; // Filled or empty star
        favoriteIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent triggering the game click event
            toggleFavorite(button);
        });
        a.appendChild(favoriteIcon);

        a.addEventListener('click', () => {
    count++;
    setClickCount(button.name, count);
    sessionStorage.setItem('gameLink', button.link);
    sessionStorage.setItem('gameName', button.name);

    // Update iframe on the current page instead of navigating to viewer.html
    const iframe = document.getElementById('myIframe');
    iframe.src = button.link;
    const name = document.getElementById('game-name');
    name.innerText = button.name; // Correctly set the game name
});

        return a;
    }

    // Function to render buttons and filter them by search input
    function renderButtons(filter = '', sortBy = 'alphabetical') {
        buttonContainer.innerHTML = ''; // Clear current buttons

        let sortedButtons;

        if (sortBy === 'starred') {
            // Sort by starred games first
            sortedButtons = buttons.sort((a, b) => {
                const favoriteA = getFavoriteStatus(a.name);
                const favoriteB = getFavoriteStatus(b.name);
                return favoriteB - favoriteA; // Show favorites first
                observeButtons();
            });
        } else if (sortBy === 'clickCount') {
            sortedButtons = buttons.sort((a, b) => {
                const countA = getClickCount(a.name);
                const countB = getClickCount(b.name);
                return countB - countA;
            });
        } else if (sortBy === 'alphabetical') {
            sortedButtons = buttons.sort((a, b) => a.name.localeCompare(b.name));
        }

        // Filter buttons based on search input
        const filteredButtons = sortedButtons.filter(button => button.name.toLowerCase().includes(filter.toLowerCase()));

        filteredButtons.forEach(button => {
            button.favorite = getFavoriteStatus(button.name); // Get the current favorite status
            buttonContainer.appendChild(createButton(button));
        });

        counterDisplay.textContent = `${filteredButtons.length} Games Loaded`;
    }

    // Event listeners for search and sort inputs
    searchInput.addEventListener('input', (e) => {
        renderButtons(e.target.value, sortOptions.value);
    });

    sortOptions.addEventListener('change', (e) => {
        renderButtons(searchInput.value, e.target.value);
    });

    // Add the "Sort By Starred" option to the dropdown
    const starredOption = document.createElement('option');
    starredOption.value = 'starred';
    starredOption.textContent = 'Sort By Starred';
    sortOptions.appendChild(starredOption);

    renderButtons(); // Initial rendering
    // Intersection Observer to fade in buttons when fully visible
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 1.0 // fully in view
});

// Observe all current and future buttons
function observeButtons() {
    const buttons = document.querySelectorAll('.menu-button');
    buttons.forEach(button => observer.observe(button));
}

});
