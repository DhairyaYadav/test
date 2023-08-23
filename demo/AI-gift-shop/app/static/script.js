(() => {
    "use strict";

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                form.classList.add("was-validated");
            },
            false
        );
    });
})();

setTheme(getStoredTheme());

// Add event listener for theme switches
document.querySelectorAll("[data-bs-theme-value]").forEach((element) => {
    element.addEventListener("click", function (event) {
        const theme = event.target.getAttribute("data-bs-theme-value");
        setTheme(theme);
    });
});

// Function to get stored theme
function getStoredTheme() {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme || "auto";
}

// Function to set theme
function setTheme(theme) {
    const body = document.body;
    body.classList.remove("theme-light", "theme-dark");

    if (theme === "auto") {
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            document.documentElement.setAttribute("data-bs-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-bs-theme", theme);
        }
    } else {
        document.documentElement.setAttribute("data-bs-theme", theme);
    }

    localStorage.setItem("theme", theme);
}

const texts = [
    " A new study suggests that younger kids are happier when they’re given material gifts rather than experiential ones.",
    "Teenage girls love clothes. Buy them clothes, a cute top, a nice pair of jeans. If you want bonus points buy them a cute hoodie from their favorite company or music artist.",
    "Just don’t forget to include a beautiful card with these gifts.😊","So many loved ones forget that music of their elderly love ones youth (ages when they were teenagers up to the age of 40) stimulates the brain and memory."
]; // Replace with your image URLs
let currentIndex = 0;
const textElement = document.getElementById("factcontent"); // Replace with the ID of your target DOM element

function displayText() {
    textElement.textContent = texts[currentIndex];

    currentIndex = (currentIndex + 1) % texts.length;
}

setInterval(displayText, 4000);
