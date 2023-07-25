// Wrap every letter in a span
function animate() {
  var tl = anime.timeline({loop: true})
  tl.add({
    targets: '.hd .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  })
  tl.add({
    targets: '.hd',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  tl.add({
    targets: '.Image',
    translateY: 10,
    duration: 500,
    delay: 100,
  }, 0);
}

window.onload = animate;

