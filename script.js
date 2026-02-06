// Horizontal scroll illusion for About & Services pages
document.querySelectorAll('.horizontal').forEach(section => {
  section.addEventListener('wheel', e => {
    if (window.innerWidth > 768) {
      e.preventDefault();
      section.scrollLeft += e.deltaY;
    }
  }, { passive: false });
});
