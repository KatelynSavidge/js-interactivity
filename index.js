
let message = document.querySelector('#messege')


function addMovie (event) {
    event.preventDefault()
    const inputField = document.querySelector("input")
    const movie = document.createElement("li")
    const movieTitle = document.createElement("span")
    movieTitle.textContent = inputField.value

    movieTitle.addEventListener('click', crossoffMovie)

    movie.appendChild(movieTitle)
    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'x'
    deleteBtn.addEventListener('click', deleteMovie)
    movie.appendChild(deleteBtn)


    document.querySelector('ul').appendChild(movie)
    inputField.value = ''
    
    
}
function deleteMovie (event) {
    event.target.parentNode.remove('li')
    message.textContent = 'Movie Deleted'
}

document.querySelector('form').addEventListener('submit', addMovie)


function crossoffMovie (event) {
    event.target.classList.toggle('checked') 

    if (event.target.classList.contains['checked']) {
        message.textContent = "watched"
    } else {
        message.textContent = "unwatched"
    }
}

