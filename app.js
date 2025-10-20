// Subtle hover distortion and header shadow on scroll
(function () {
  const header = document.querySelector('.site-header');
  const tiles = document.querySelectorAll('.tile');

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    header.style.boxShadow = y > 10 ? '0 10px 26px rgba(0,0,0,.35)' : 'none';
  }, { passive: true });

  tiles.forEach(tile => {
    tile.addEventListener('mousemove', (e) => {
      const rect = tile.getBoundingClientRect();
      const dx = (e.clientX - rect.left) / rect.width - 0.5;
      const dy = (e.clientY - rect.top) / rect.height - 0.5;
      tile.style.transform = `perspective(600px) rotateX(${(-dy*6).toFixed(2)}deg) rotateY(${(dx*6).toFixed(2)}deg) translateZ(6px)`;
    });
    tile.addEventListener('mouseleave', () => {
      tile.style.transform = 'none';
    });
  });
})();


