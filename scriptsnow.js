document.addEventListener("DOMContentLoaded", function () {
    const numSnowflakes = 200;
    const body = document.body;

    for (let i = 0; i < numSnowflakes; i++) {
        createSnowflake();
    }

    function createSnowflake() {
        const snowflake = document.createElement("div");
        snowflake.className = "snowflake";
        body.appendChild(snowflake);

        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const duration = Math.random() * 5 + 1; // Randomize animation duration

        snowflake.style.left = startX + "px";
        snowflake.style.top = startY + "px";
        snowflake.style.animationDuration = `${duration}s`;
    }
});
