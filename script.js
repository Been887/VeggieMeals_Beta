document.addEventListener('DOMContentLoaded', (event) => {
    var banner = document.getElementById("banner");
    var show = false;
    let hasScrolled = false;
    let open = false;

    function toggleDirectory() {
        open = !open;

        if (open) {
            directory.style.left = "0";
            revealArrow.style.left = "10.95%";
            revealArrow.style.transform = "scaleX(-1)";
        } else {
            directory.style.left = "-12%";
            revealArrow.style.left = "-1.25%";
            revealArrow.style.transform = "scaleX(1)";
        }
    } "no-repeat";

    const hundredUnits = Math.min(window.innerHeight, window.innerWidth);
    document.documentElement.style.setProperty('--100u', `${hundredUnits}px`);

    let fileName;

    function displayfile() {    
        fileName = window.location.pathname.split('/').pop();
        console.log("You are currently browsing " + fileName + ".\n");
    }

    window.addEventListener("click", displayfile);

    window.addEventListener("scroll", function() {
        if (!hasScrolled) {
            document.querySelectorAll(".banner .gif").forEach(el => {
                el.style.display = "none";
            });
            hasScrolled = true;
        }
    });

    function gotoAboutus() {
        document.getElementById("aboutus").scrollIntoView({ behavior: "smooth" });
    }

    function gotoGoal() {
        document.getElementById("goal").scrollIntoView({ behavior: "smooth" });
    }


    const directory = document.createElement("div");
    const revealArrow = document.createElement("img");

    //revealarrow
    revealArrow.style.position = "fixed";
    revealArrow.style.left = "-1.25%";
    revealArrow.style.top = "12.5%";
    revealArrow.style.width = "2.5%";
    revealArrow.style.height = "auto";
    revealArrow.src = "resources/arrow.png"
    revealArrow.style.cursor = "pointer";
    revealArrow.style.transition = "left 0.8s ease-in-out, transform 0.3s ease";

    //directory

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

    revealArrow.addEventListener("click", toggleDirectory);
});
