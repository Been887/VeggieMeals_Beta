let open = false;

document.addEventListener('DOMContentLoaded', (event) => {
    const directory = document.createElement("div");
    const revealArrow = document.createElement("img");

    // Retrieve state from localStorage
    const savedState = localStorage.getItem('directoryState');
    if (savedState === "open") {
        open = true;
        directory.style.left = "0";
        revealArrow.style.left = "10.95%";
        revealArrow.style.transform = "scaleX(1)";
    }

    // Toggle directory function
    function toggleDirectory() {
        open = !open;
        if (open) {
            directory.style.left = "0";
            revealArrow.style.left = "10.95%";
            revealArrow.style.transform = "scaleX(-1)";
            localStorage.setItem('directoryState', 'open');
        } else {
            directory.style.left = "-12%";
            revealArrow.style.left = "-1.25%";
            revealArrow.style.transform = "scaleX(1)";
            localStorage.setItem('directoryState', 'closed');
        }
    }

    // Styling and positioning for revealArrow
    revealArrow.style.position = "fixed";
    revealArrow.style.left = "-1.25%";
    revealArrow.style.top = "12.5%";
    revealArrow.style.width = "2.5%";
    revealArrow.style.height = "auto";
    revealArrow.src = "/C:/Users/BenDowney/OneDrive - Cognita Schools/Documents/GitHub/VeggieMeals_Beta/resources/arrow.png";
    revealArrow.style.cursor = "pointer";
    revealArrow.style.transition = "left 0.8s ease-in-out, transform 0.3s ease";

    // Directory element settings
    directory.id = "directory";
    directory.style.position = "fixed";
    directory.style.left = "-12%";
    directory.style.top = "12.5%";
    directory.style.width = "10%";
    directory.style.height = "75%";
    directory.style.backgroundColor = "rgba(113, 196, 96, 0.801)";
    directory.style.border = "0.5px solid rgba(0, 0, 0, 0.5)";
    directory.style.borderRadius = "1.5%";
    directory.style.overflow = "hidden";
    directory.style.margin = "0";
    directory.style.padding = "0.5%";
    directory.style.transition = "left 0.8s ease-in-out";
    directory.style.zIndex = "10000";

    const directoryHeader = document.createElement("h2");
    directoryHeader.innerText = "Find Sections";
    directory.appendChild(directoryHeader);

    const aboutUsLink = document.createElement("a");
    aboutUsLink.innerText = "About Us";
    aboutUsLink.style.display = "block";
    aboutUsLink.style.margin = "5px";
    aboutUsLink.href = "recipes/avocado_on_toast.html";
    directory.appendChild(aboutUsLink);

    const ourGoalLink = document.createElement("a");
    ourGoalLink.innerText = "Our Goal";
    ourGoalLink.style.display = "block";
    ourGoalLink.style.margin = "5px";
    ourGoalLink.href = "recipes/halloumi_burger.html";
    directory.appendChild(ourGoalLink);

    document.body.appendChild(directory);
    document.body.appendChild(revealArrow);

    // Add event listeners
    revealArrow.addEventListener("click", toggleDirectory);

    // Scroll event to hide banner GIF
    let hasScrolled = false;
    window.addEventListener("scroll", function() {
        if (!hasScrolled) {
            document.querySelectorAll(".banner .gif").forEach(el => {
                el.style.display = "none";
            });
            hasScrolled = true;
        }
    });

    // Update viewport variable
    const hundredUnits = Math.min(window.innerHeight, window.innerWidth);
    document.documentElement.style.setProperty('--100u', `${hundredUnits}px`);
});
