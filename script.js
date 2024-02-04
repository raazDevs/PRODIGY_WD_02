document.addEventListener("DOMContentLoaded", function () {
  let seconds = 0;
  let tens = 0;
  const appendTens = document.getElementById("tens");
  const appendSeconds = document.getElementById("seconds");
  const buttonStart = document.getElementById('button-start');
  const buttonStop = document.getElementById('button-stop');
  const buttonReset = document.getElementById('button-reset');
  const navLinks = document.querySelectorAll('nav a');
  let interval;

  buttonStart.addEventListener('click', startTimer);
  buttonStop.addEventListener('click', stopTimer);
  buttonReset.addEventListener('click', resetTimer);

  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function startTimer() {
    clearInterval(interval);
    interval = setInterval(updateTimer, 10);
  }

  function stopTimer() {
    clearInterval(interval);
  }

  function resetTimer() {
    clearInterval(interval);
    tens = seconds = 0;
    updateDisplay();
  }

  function updateTimer() {
    tens++;
    if (tens > 99) {
      seconds++;
      tens = 0;
    }
    updateDisplay();
  }

  function updateDisplay() {
    const formattedTens = tens < 10 ? "0" + tens : tens;
    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    appendTens.textContent = formattedTens;
    appendSeconds.textContent = formattedSeconds;
  }

  function smoothScroll(event) {
    event.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
});
