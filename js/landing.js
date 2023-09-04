const fadeEl = document.querySelectorAll(".fade-in")

fadeEl.forEach((el, i) => {
  return gsap.to(el, 1, {
    delay: (i + 1) * 0.7,
    opacity: 1,
  })
})
