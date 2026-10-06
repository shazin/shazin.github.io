// Resume page interactions: theme preference, print, and selected-work filters.
const themeToggle = document.querySelector(".theme-toggle");
const printButton = document.querySelector(".print-button");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const emptyMessage = document.querySelector(".filter-empty");

const savedTheme = localStorage.getItem("resume-theme");
if (savedTheme === "dark") {
    document.body.dataset.theme = "dark";
    themeToggle.setAttribute("aria-label", "Switch to light theme");
}

themeToggle.addEventListener("click", () => {
    const isDark = document.body.dataset.theme !== "dark";
    document.body.dataset.theme = isDark ? "dark" : "light";
    themeToggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
    localStorage.setItem("resume-theme", isDark ? "dark" : "light");
});

printButton.addEventListener("click", () => window.print());

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const filter = button.dataset.filter;
        let visibleCount = 0;

        filterButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("is-active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        projectCards.forEach((card) => {
            const isVisible = filter === "all" || card.dataset.category.split(" ").includes(filter);
            card.hidden = !isVisible;
            if (isVisible) visibleCount += 1;
        });

        emptyMessage.hidden = visibleCount > 0;
    });
});
