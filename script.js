const toggle = document.getElementById('toggle')
const header = document.getElementById('header')
const h1 = document.getElementById('h1')
const buttons = document.querySelectorAll('button')
const post = document.querySelectorAll('.post')

toggle.addEventListener('change', toDark)

function toDark() {
    body.classList.add('dark')
    body.style.backgroundColor = "white"
    header.style.backgroundColor = "var(--dark)"
    h1.style.color = "var(--light)"
    post.forEach(post => {
        post.style.background = "var(--dark)"
        post.style.color = "var(--light)"
    })
}