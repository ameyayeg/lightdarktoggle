const toggle = document.getElementById('toggle')
const header = document.getElementById('header')
const h1 = document.getElementById('h1')
const buttons = document.querySelectorAll('button')
const post = document.querySelectorAll('.post')
const footer = document.querySelector('footer')
const yearCopy = document.querySelector('.year')

toggle.addEventListener('change', () => {
    toggle.checked === true ? darkMode() : lightMode()
})

function darkMode() {
    body.classList.add('dark')
    body.style.backgroundColor = "var(--light)"
    header.style.backgroundColor = "var(--dark)"
    h1.style.color = "var(--light)"
    post.forEach(post => {
        post.style.background = "var(--dark)"
        post.style.color = "var(--light)"
    })
    footer.classList.add('dark')
} 

function lightMode() {
    body.classList.remove('dark')
    body.style.backgroundColor = "var(--highlight)"
    header.style.backgroundColor = "var(--light)"
    h1.style.color = "var(--dark)"
    post.forEach(post => {
        post.style.background = "var(--light)"
        post.style.color = "var(--dark)"
    })
    footer.classList.remove('dark')
}

yearCopy.innerHTML = (new Date().getFullYear());

