
document.addEventListener('DOMContentLoaded', function () {
  const music = document.getElementById('wedding-music');
  const playBtn = document.getElementById('play-music');
  if (music && playBtn) {
    music.play().catch(() => {
      playBtn.style.display = 'block';
      playBtn.addEventListener('click', () => {
        music.play();
        playBtn.style.display = 'none';
      });
    });
  }

  const countdown = document.getElementById('countdown');
  const weddingDate = new Date("2026-06-20T14:00:00").getTime();
  setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    countdown.innerHTML = `Only ${days} days to go!`;
  }, 1000);
});
