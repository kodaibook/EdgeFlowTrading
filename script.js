<script>
// Meniu mobil
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav__links');
if (navToggle) navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Tilt subtil pe mouse
document.addEventListener('mousemove', (e) => {
  const x = (e.clientX / innerWidth - 0.5) * 2;
  const y = (e.clientY / innerHeight - 0.5) * 2;
  document.querySelectorAll('.tilt').forEach(el => {
    el.style.transform = `rotateX(${y * 6}deg) rotateY(${x * -8}deg) translateZ(10px)`;
  });
});
</script>
