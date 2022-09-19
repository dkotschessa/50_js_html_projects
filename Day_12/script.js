const togglebuttons = document.querySelectorAll('.faq-toggle')

togglebuttons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.classList.toggle('active')
  })
})
