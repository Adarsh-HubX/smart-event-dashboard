const form = document.querySelector('#form')
const eventCards = document.querySelector('.cards')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    const title = eventTitle.value
    const date = eventDate.value
    const cat = category.value
    const desc = description.value

    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
        <h2>${title}</h2>
        <p>📅 ${date}</p>
        <button>${cat}</button>
        <p>${desc}</p>
        <div class="deleteCard">x</div>
    `

    const emptyMsg = document.querySelector('#emptyMsg')
    if (emptyMsg) emptyMsg.remove()

    eventCards.appendChild(card)
    form.reset()
})

eventCards.addEventListener('click', function(event) {
    if (event.target.classList.contains('deleteCard')) {
        event.target.parentElement.remove()
        
        if (eventCards.children.length === 0) {
            eventCards.innerHTML = '<p id="emptyMsg">No events yet. Add your first event!</p>'
        }
    }
})

document.querySelector('#sampleBtn').addEventListener('click', function() {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = `
            <h2>Sample Event</h2>
            <p>📅 2026-02-15</p>
            <button>Workshop</button>
            <p>This is a sample event description.</p>
            <div class="deleteCard">x</div>
    `
    
    const emptyMsg = document.querySelector('#emptyMsg')
    if (emptyMsg) emptyMsg.remove()

    eventCards.appendChild(card)
})

document.querySelector('#clearBtn').addEventListener('click', function() {
    eventCards.innerHTML = '<p id="emptyMsg">No events yet. Add your first event!</p>'
})

document.addEventListener('keydown', (event) => {
    document.querySelector('.key').innerText = event.key
})