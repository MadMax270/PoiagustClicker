document.addEventListener("DOMContentLoaded", function () {
    // Элементы меню и экранов
    const mainMenu = document.getElementById("main-menu");
    const gameScreen = document.getElementById("game-screen");
    const settingsScreen = document.getElementById("settings-screen");

    const startGameBtn = document.getElementById("start-game-btn");
    const settingsBtn = document.getElementById("settings-btn");
    const backToMenuBtn = document.getElementById("back-to-menu-btn");
    const backSettingsBtn = document.getElementById("back-settings-btn");
    const changeImageBtn = document.getElementById("change-image-btn");

    const tapButton = document.getElementById("tap-button");
    const scoreDisplay = document.getElementById("score");

    let score = 0;

    // Функции переключения экранов
    function showMenu() {
        mainMenu.classList.remove("hidden");
        gameScreen.classList.add("hidden");
        settingsScreen.classList.add("hidden");
    }

    function startGame() {
        score = 0;
        updateScore();
        mainMenu.classList.add("hidden");
        gameScreen.classList.remove("hidden");
    }

    function openSettings() {
        mainMenu.classList.add("hidden");
        settingsScreen.classList.remove("hidden");
    }

    // Обновление счёта
    function updateScore() {
        scoreDisplay.textContent = "Очки: " + score;
    }

    // События для кнопок
    startGameBtn.addEventListener("click", startGame);
    settingsBtn.addEventListener("click", openSettings);
    backToMenuBtn.addEventListener("click", showMenu);
    backSettingsBtn.addEventListener("click", showMenu);

    // Тап на кнопку игры
    tapButton.addEventListener("click", function () {
        score++;
        updateScore();
    });

    // Смена изображения кнопки
    changeImageBtn.addEventListener("click", function () {
        const newImageUrl = prompt("Введите URL новой картинки:");
        if (newImageUrl) {
            tapButton.querySelector("img").src = newImageUrl;
        }
    });

    // Показать главное меню при загрузке
    showMenu();
});
