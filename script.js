document.addEventListener('DOMContentLoaded', () => {
    const glitchText = document.querySelector('.glitch-text');
    const radiationValue = document.querySelector('.radiation-value');

    // Эффект глитча для текста
    setInterval(() => {
        if (Math.random() > 0.8) {
            const glitched = "ЯДЕРНАЯ ЗИМА".split('').map(char => 
                Math.random() > 0.7 ? String.fromCharCode(Math.random() * 26 + 1040) : char
            ).join('');
            glitchText.textContent = glitched;
        } else {
            glitchText.textContent = "ЯДЕРНАЯ ЗИМА";
        }
    }, 100);

    // Анимация счетчика радиации
    setInterval(() => {
        radiationValue.textContent = `${Math.floor(Math.random() * 150) + 100} мР/ч`;
    }, 1000);
});
