const createSnow = () => {
    const snowContainer = document.getElementById('snow-container');
  
    // Generuj więcej śnieżynek w jednym cyklu
    const snowflakeCount = 13; // Liczba śnieżynek na raz
    for (let i = 0; i < snowflakeCount; i++) {
      const snowflake = document.createElement('i');
      snowflake.classList.add('snowflake');
      snowflake.textContent = '•'; // Śnieżynka emoji
  
      snowflake.style.left = Math.random() * window.innerWidth + 'px';
      snowflake.style.animationDuration = Math.random() * 5 + 3 + 's';
      snowflake.style.opacity = Math.random();
  
      snowContainer.append(snowflake);
  
      // Usuń śnieżynkę po zakończeniu animacji
      setTimeout(() => {
        snowflake.remove();
      }, 8000);
    }
  };
  
  // Zmniejsz czas interwału, aby generować więcej śnieżynek
  setInterval(createSnow, 100); // 100ms interwału między kolejnymi generacjami

window.addEventListener('resize', function () {
    document.body.style.zoom = 1;
});

  
