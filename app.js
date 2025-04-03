// Download Terminal button
// const terminalBtn = document.getElementById('terminal-btn');
// terminalBtn.addEventListener('click', () => {
//     window.open("/assets/Logo.png");
// });

// // Download Package button
// const packageBtn = document.getElementById('package-btn');
// packageBtn.addEventListener('click', () => {
//     alert('Package download started!');
// });

function copyCommand() {
    navigator.clipboard.writeText(document.getElementById("command").innerText)
        .then(() => {
            let toast = document.getElementById("toast");
            toast.style.opacity = "1"; // Show toast
            setTimeout(() => toast.style.opacity = "0", 2000); // Hide after 2s
        })
        .catch(err => console.error("Error copying text: ", err));
}


// Fixed positions for all 8 icons (based on your screenshot)
const fixedPositions = [
    { top: "12vh", left: "7vw" },  // React logo (top-left)
    { top: "84vh", left: "90vw" },   // Npm logo (top-right)
    { top: "85vh", left: "0.5vw" },  // Electron logo (mid-left)
    { top: "81vh", left: "45vw" },  // REACT logo (bottom-center)
    { top: "63vh", left: "23vw" },  // NPM logo (bottom-left)
    { top: "33vh", left: "28vw" },  // JS logo (middle-left) /* EXTRA ICON */
    { top: "14vh", left: "87vw" },   // Js logo (bottom-right) /* EXTRA ICON */
    { top: "47vh", left: "83vw" },   // Electron logo (far right) /* EXTRA ICON */
    { top: "45vh", left: "6vw" },  // REACT logo (mid - left)
    { top: "37vh", left: "67vw" },  // Electron logo (mid-right)
    { top: "68vh", left: "69vw" },  // NPM logo (mid-right)
];
// Initialize icons at fixed positions
window.onload = () => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon, index) => {
        if (fixedPositions[index]) {
            icon.dataset.fixedTop = fixedPositions[index].top;  // Store fixed top position
            icon.dataset.fixedLeft = fixedPositions[index].left; // Store fixed left position

            icon.style.position = "absolute";
            icon.style.top = fixedPositions[index].top;
            icon.style.left = fixedPositions[index].left;
            icon.style.zIndex = "-1"; // Ensures icons stay behind other elements
        }
    });
};

// Move icons slightly along with cursor
document.addEventListener("mousemove", (event) => {
    const icons = document.querySelectorAll(".icon");
    icons.forEach((icon, index) => {
        const speed = (index + 1) * 0.001; // Adjust speed for natural movement
        const xOffset = event.clientX * speed;
        const yOffset = event.clientY * speed;

        // Move icons relative to their fixed positions
        icon.style.top = `calc(${icon.dataset.fixedTop} + ${yOffset}px)`;
        icon.style.left = `calc(${icon.dataset.fixedLeft} + ${xOffset}px)`;
    });
});
