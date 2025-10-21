const quotes = ["Stay Calm", "Think Calm", "Find a way to complete the task"]

const btn = document.querySelector('button')
const quote = document.querySelector('h1')

btn.addEventListener('click', ()=>{
    const ind = Math.floor(Math.random()*3);
    quote.innerText = quotes[ind];
})