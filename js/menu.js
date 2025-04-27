document.addEventListener('DOMContentLoaded', function () {
    const buttons = [
        { name: '2048', image: '/images/2048.png', link: '/gameCode/2048', path: '/play', favorite: false },
        { name: 'Snow Rider', image: '/images/snowrider.png', link: 'https://www.hoodamath.com/mobile/games/snow-rider-3d/game.html?nocheckorient=1', path: '/play', favorite: false },
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
        { name: 'Helix Jump', image: '/images/helixjump.png', link: '/gameCode/helix-jump', path: '/play', favorite: false },
        { name: 'Are you Human?', image: '/images/areyouhuman.png', link: 'https://www.hoodamath.com/mobile/games/are-you-human/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Ball Blast', image: '/images/ballblast.png', link: '/gameCode/ball-blast', path: '/play', favorite: false },
        { name: 'Simon', image: '/images/simongame.png', link: '/gameCode/simon', path: '/play', favorite: false },
        { name: 'Speed Cube', image: '/images/speedcube.png', link: 'https://www.hoodamath.com/mobile/games/speed-cube/game.html?nocheckorient=1', path: '/play', favorite: false },
        { name: 'Drive Mad', image: '/images/drivemad.png', link: '/gameCode/drive-mad', path: '/play', favorite: false },
        { name: 'Stickman Hook', image: '/images/stickmanhook.png', link: '/gameCode/stick-man-hook', path: '/play', favorite: false },
        { name: 'Cookie Clicker', image: '/images/cookieclicker.png', link: 'gameCode/cookie-clicker', path: '/play', favorite: false },
        { name: 'Escape Roads', image: '/images/escaperoads.png', link: '/gameCode/escape-roads', path: '/play', favorite: false },
        { name: 'Stick Archer Battle', image: '/images/stickarcherbattle.png', link: '/gameCode/stick-archer-battle', path: '/play', favorite: false },
        { name: 'Arena King', image: '/images/arenaking.png', link: '/gameCode/arena-king', path: '/play', favorite: false },
        { name: 'Gun Spin', image: '/images/gunspin.png', link: '/gameCode/gun-spin', path: '/play', favorite: false },
        { name: 'Stickman Parkour', image: '/images/stickmanparkour.png', link: '/gameCode/stickman-parkour', path: '/play', favorite: false },
        { name: 'Recoil', image: '/images/recoil.png', link: '/gameCode/recoil', path: '/play', favorite: false },
        { name: 'Google Snake', image: '/images/snake.png', link: '/gameCode/snake', path: '/play', favorite: false },
        { name: 'Moto X3m', image: '/images/motox3m.png', link: '/gameCode/moto-x3m', path: '/play', favorite: false },
        { name: 'Bacon May Die', image: '/images/baconmaydie.png', link: '/gameCode/bacon-may-die', path: '/play', favorite: false },
        { name: 'Eaglercraft', image: '/images/eaglercraft.png', link: '/gameCode/eaglercraft', path: '/play', favorite: false },
        { name: 'Asteroids', image: '/images/asteroids.png', link: '/gameCode/asteroids', path: '/play', favorite: false },
        { name: 'Slither.IO', image: '/images/slitherio.png', link: '/gameCode/slither-io', path: '/play', favorite: false },
        { name: 'Flappy Bird', image: '/images/flappybird.png', link: '/gameCode/flappy-bird', path: '/play', favorite: false },
        { name: 'Slow Roads', image: '/images/slowroads.png', link: '/gameCode/slow-roads', path: '/play', favorite: false },
        { name: 'Cleanup.IO', image: '/images/cleanupio.png', link: '/gameCode/cleanup-io', path: '/play', favorite: false },
        { name: 'Tomb of The Mask', image: '/images/tombofthemask.png', link: '/gameCode/tomb-of-the-mask', path: '/play', favorite: false },
    ];

   const buttonContainer = document.getElementById('buttonContainer');
    const searchInput = document.getElementById('search');
    const counterDisplay = document.getElementById('counterDisplay');
    const sortOptions = document.getElementById('sortOptions');

    let showClickCounts = false;

    function getClickCount(buttonName) {
        const count = localStorage.getItem(buttonName);
        return count ? parseInt(count) : 0;
    }

    function setClickCount(buttonName, count) {
        localStorage.setItem(buttonName, count);
    }

    function getFavoriteStatus(buttonName) {
        const status = localStorage.getItem(buttonName + '_favorite');
        return status === 'true';
    }

    function setFavoriteStatus(buttonName, status) {
        localStorage.setItem(buttonName + '_favorite', status);
    }

    function toggleFavorite(button) {
        button.favorite = !button.favorite;
        setFavoriteStatus(button.name, button.favorite);
        renderButtons(searchInput.value, sortOptions.value);
    }

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
        popUp.innerText = Clicked: ${count} clicks;
        a.appendChild(popUp);

        // Font Awesome favorite icon
        const favoriteIcon = document.createElement('span');
        favoriteIcon.className = 'favorite-icon';
        const icon = document.createElement('i');
        icon.className = button.favorite ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
        favoriteIcon.appendChild(icon);
        favoriteIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleFavorite(button);
            icon.className = button.favorite ? 'fa-solid fa-thumbs-up' : 'fa-regular fa-thumbs-up';
        });
        a.appendChild(favoriteIcon);

        a.addEventListener('click', () => {
            count++;
            setClickCount(button.name, count);
            sessionStorage.setItem('gameLink', button.link);
            sessionStorage.setItem('gameName', button.name);
            sessionStorage.setItem('gameImage', button.image);

            const iframe = document.getElementById('myIframe');
            iframe.src = button.link;
            const name = document.getElementById('game-name');
            name.innerText = button.name;
        });

        return a;
    }

    function renderButtons(filter = '', sortBy = 'alphabetical') {
        buttonContainer.innerHTML = '';

        let sortedButtons;

        if (sortBy === 'starred') {
            sortedButtons = buttons.sort((a, b) => {
                const favoriteA = getFavoriteStatus(a.name);
                const favoriteB = getFavoriteStatus(b.name);
                return favoriteB - favoriteA;
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

        const filteredButtons = sortedButtons.filter(button => button.name.toLowerCase().includes(filter.toLowerCase()));

        filteredButtons.forEach(button => {
            button.favorite = getFavoriteStatus(button.name);
            buttonContainer.appendChild(createButton(button));
        });

        counterDisplay.textContent = ${filteredButtons.length} Games Loaded;
    }

    searchInput.addEventListener('input', (e) => {
        renderButtons(e.target.value, sortOptions.value);
    });

    sortOptions.addEventListener('change', (e) => {
        renderButtons(searchInput.value, e.target.value);
    });

    const starredOption = document.createElement('option');
    starredOption.value = 'starred';
    starredOption.textContent = 'Sort By Starred';
    sortOptions.appendChild(starredOption);

    renderButtons();
});
