// Динамическое обновление времени
function updateDateTime() {
  const now = new Date();
  const formatted = `${now.getDate().toString().padStart(2, '0')}.${(now.getMonth() + 1).toString().padStart(2, '0')}.${now.getFullYear()} / ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  document.getElementById('date-time').innerText = formatted;
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Глитч-эффект текста
function glitchText() {
  const original = 'ЯДЕРНАЯ ЗИМА';
  const letters = 'БГДЖЗКЛМНПРСТФХЦЧШЩ';
  let glitched = original.split('').map(char => 
    Math.random() > 0.7 ? letters[Math.floor(Math.random() * letters.length)] : char
  ).join('');
  document.getElementById('glitch-text').innerText = glitched;
}
setInterval(glitchText, 100);

// Обновление показаний приборов
function updateMetrics() {
  document.getElementById('radiation').innerText = `${Math.floor(Math.random() * 150) + 100} мР/ч`;
  document.getElementById('temperature').innerText = `${(-23 + Math.random() * 2).toFixed(1)}°C`;
  document.getElementById('wind-speed').innerText = `${(15 + Math.random() * 5).toFixed(1)} м/с`;
}
setInterval(updateMetrics, 1000);
updateMetrics();
