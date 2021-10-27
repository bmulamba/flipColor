const color = ['violet', 'red', 'yellow', 'red', 'black', 'green']
const btn = document.getElementById('button');
const body = document.querySelector('body');

btn.addEventListener('click', () => {
    const colorPin = parseInt(Math.random() * color.length);
    document.body.style.backgroundColor = color[colorPin];
    document.querySelector('h1').innerHTML = color[colorPin]
})