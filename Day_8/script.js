const labels = document.querySelectorAll('.form-control label')

labels.forEach(label => {
  // give each letter of the inner text it's own div
  label.innerHTML = label.innerText
    .split('')
    .map(
      (letter, idx) =>
        `<span style = "transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join('')
})
