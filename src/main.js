// Intersection Observer — detecta cuando un elemento entra en pantalla
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // El elemento entró en pantalla — activamos la animación
      entry.target.classList.add('visible')
      // Dejamos de observarlo para que no se repita
      observer.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.15 // se activa cuando el 15% del elemento es visible
})

// Observamos todos los elementos con clase "animar"
document.querySelectorAll('.animar').forEach(el => {
  observer.observe(el)
})