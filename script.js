let open = false;

document.addEventListener('DOMContentLoaded', (event) => {

    const directory = document.createElement("div");
    const revealArrow = document.createElement("img");

    let curPage = window.location.pathname;

    window.addEventListener("popstate", () => {
        curPage = window.location.pathname;
    });


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
            revealArrow.style.left = "11%";
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
    revealArrow.classList.add("revealArrow");
    revealArrow.style.left = "-1.25%";
    revealArrow.src = "/VeggieMeals_Beta/resources/arrow.png";

    // Directory element settings
    directory.id = "directory";
    directory.style.left = "-12%";
    directory.classList.add("directory");

    const directoryHeader = document.createElement("h2");
    directoryHeader.innerText = "Find Sections";
    directory.appendChild(directoryHeader);

    const aboutUsLink = document.createElement("a");
    aboutUsLink.innerText = "About Us";
    aboutUsLink.href = "/VeggieMeals_Beta/recipes/avocado_on_toast.html";
    directory.appendChild(aboutUsLink);

    const ourGoalLink = document.createElement("a");
    ourGoalLink.innerText = "Our Goal";
    ourGoalLink.href = "/VeggieMeals_Beta/recipes/halloumi_burger.html";
    directory.appendChild(ourGoalLink);

    document.body.appendChild(directory);
    document.body.appendChild(revealArrow);

    // Add event listeners
    revealArrow.addEventListener("click", toggleDirectory);
    aboutUsLink.addEventListener("click", () => {
        if (curPage != "/VeggieMeals_Beta/pages/about_us.html" && curPage != "/VeggieMeals_Beta/index.html") {
            window.location.href = "/VeggieMeals_Beta/pages/about_us.html";

        } else if (curPage == "/VeggieMeals_Beta/index.html") {
            aboutUsLink.scrollIntoView({behavior:"smooth", block:"start"});
        }
    });
    ourGoalLink.addEventListener("click", () => {
        if (curPage != "/VeggieMeals_Beta/index.html") {
            window.location.href = "/VeggieMeals_Beta/index.html";
            aboutUsLink.scrollIntoView({behaviour:"smooth", block:"start"});
        }
    });

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
