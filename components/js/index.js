const navs = document.querySelectorAll('a');
const frame = document.querySelector('iframe');

const nav = Array.from(navs);

nav.map(a => {
  a.onclick = () => {
    event.preventDefault()
    frame.src = a.href
  }
})
