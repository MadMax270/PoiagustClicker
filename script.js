const clickButton = document.getElementById('clickButton');
const imageUpload = document.getElementById('imageUpload');
const coinImage = document.getElementById('coinImage');

let coinCount = 0;

clickButton.addEventListener('click', () => {
    coinCount++;
    coinImage.src = 'path/to/your/coin-image.png'; // Замените на путь к изображению Poiagust Coin
    coinImage.alt = `Poiagust Coin x${coinCount}`;
});

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        // Обработка загруженного изображения
        // Например, можно отобразить его на странице
    }
});
