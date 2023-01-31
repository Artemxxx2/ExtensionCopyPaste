doc = this.document.querySelector('body')
doc.addEventListener('dblclick',function el(eve) {
    text = String(eve.target.textContent)
    navigator.clipboard.writeText(text);
    alert('copied')
})
