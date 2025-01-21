const noBtn = document.getElementById("no-btn");

noBtn.addEventListener("mouseover", () => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;

    // Generate random new positions for the "No" button
    const randomX = Math.random() * (containerWidth - noBtn.clientWidth);
    const randomY = Math.random() * (containerHeight - noBtn.clientHeight);

    // Move the "No" button to the new position
    noBtn.style.position = "absolute";
    noBtn.style.left = `${randomX}px`;
    noBtn.style.top = `${randomY}px`;
});