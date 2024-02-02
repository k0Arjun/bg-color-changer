const button = document.querySelector("button")
const body = document.querySelector("body")
const collor = ['red','blue','yellow','orange','green','white','#f2e1e1','#a1e1e1','#c1e1e1','#d1e1e1']

button.addEventListener('click',changebg)

function changebg(){
    const index = parseInt(Math.random() * collor.length+1)
    body.style.backgroundColor=collor[index]
}


// used to learn about the addEventListener and randomand few more
