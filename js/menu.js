const buttons = [
    { name: '2048', image: '/images/2048.png', link: '/Games/2048' },
];

const buttonContainer = document.getElementById('buttonContainer');
const searchInput = document.getElementById('search');
const counterDisplay = document.getElementById('counterDisplay');
const sortOptions = document.getElementById('sortOptions'); // Sorting dropdown

// Variable to track whether click counts are visible
let showClickCounts = false;  // Set this to `false` so click counts are hidden by default

// Function to get the click count for a specific button from localStorage
function getClickCount(buttonName) {
    const count = localStorage.getItem(buttonName);
    return count ? parseInt(count) : 0;
}

// Function to set the click count for a specific button in localStorage
function setClickCount(buttonName, count) {
    localStorage.setItem(buttonName, count);
}

// Function to create each button
function createButton(button) {
    const a = document.createElement('a');
    a.className = 'menu-button';
    a.href = button.link;

    // Initialize the button's click count from localStorage
    let count = getClickCount(button.name);

    const img = document.createElement('img');
    img.src = button.image;
    a.appendChild(img);

    // Create the overlay with the game name
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerText = button.name; // Display the name of the game
    a.appendChild(overlay);

    // Create the pop-up for the click count
    const popUp = document.createElement('div');
    popUp.className = 'popup';
    popUp.innerText = `Clicked: ${count} clicks`; // Display the click count
    a.appendChild(popUp);

    // Update the click count and localStorage when the button is clicked
    a.addEventListener('click', () => {
        count++;
        setClickCount(button.name, count);

        // If click counts are visible, update the pop-up
        if (showClickCounts) {
            popUp.innerText = `Clicked: ${count} times`;
        }
    });

    // Hide or show the click count based on the toggle state
    if (!showClickCounts) {
        popUp.style.display = 'none'; // Hide click counts initially
    }

    return a;
}

// Function to render buttons and filter them by search input
function renderButtons(filter = '', sortBy = 'clickCount') {
    buttonContainer.innerHTML = ''; // Clear current buttons

    // Sort the buttons based on the selected sorting option
    let sortedButtons;

    if (sortBy === 'clickCount') {
        sortedButtons = buttons.sort((a, b) => {
            const countA = getClickCount(a.name);
            const countB = getClickCount(b.name);

            // First, sort by click count
            if (countB !== countA) {
                return countB - countA; // Sort in descending order of click count
            } else {
                // If the click counts are the same, sort alphabetically by name
                return a.name.localeCompare(b.name);
            }
        });
    } else if (sortBy === 'alphabetical') {
        sortedButtons = buttons.sort((a, b) => {
            return a.name.localeCompare(b.name); // Sort alphabetically by name
        });
    }

    const filteredButtons = sortedButtons.filter(button => button.name.toLowerCase().includes(filter.toLowerCase()));

    filteredButtons.forEach(button => {
        buttonContainer.appendChild(createButton(button));
    });

    // Update the counter display with the number of visible buttons
    counterDisplay.textContent = `${filteredButtons.length} Games Loaded`;
}

// Event listener for search input to filter buttons
searchInput.addEventListener('input', (e) => {
    renderButtons(e.target.value, sortOptions.value);
});

// Event listener for sort options dropdown to change sorting method
sortOptions.addEventListener('change', (e) => {
    renderButtons(searchInput.value, e.target.value);  // Re-render buttons based on selected sorting
});

// Initial render of buttons
renderButtons();
