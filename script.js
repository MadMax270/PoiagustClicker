let coins = 0;
const coinsDisplay = document.querySelector('.coins');
const tapButton = document.querySelector('.tap-button');

tapButton.addEventListener('click', () => {
    coins += 1;
    coinsDisplay.textContent = coins.toLocaleString();
});
