const url = "http://localhost:5500/api"

function getUsers() {
  // error do catch: só vai gerar erro se tiver problema com o uso do fetch,
  // não com a requisição da url
  fetch(url)
    .then(response => response.json())
    .then(data => renderApiResult.textContent = JSON.stringify(data)) // vai pegar o response.json()
    .catch(error => console.error(error))
}
 
function getUser(id) {
  fetch(`${url}/${id}`)
    .then(response => response.json())
    .then(data => {  // Renderizar por partes
      userName.textContent = data.name
      userCity.textContent = data.city
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
}

function addUser(newUser) {
  fetch(url, {
    method: "POST", // falar pro fetch que é um método POST, não GET 
    body: JSON.stringify(newUser), // Pega o formato json e mostra em texto simples
    headers: { // Passa em requisições API
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
  fetch(`${url}/${id}`, {
    method: "PUT",
    body: JSON.stringify(updatedUser),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

function deleteUser(id) {
  fetch(`${url}/${id}`, {
    method: "DELETE",
    // não vai passar um body, pois estamos enviando o único dado na url (id)
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
    .then(response => response.json())
    .then(data => alertApi.textContent = data)
    .catch(error => console.error(error))
}

const newUser = {
  name: "Chiquin da Silva",
  avatar: "https://picsum.photos/200/300",
  city: "Rio do Sul"
}

const updatedUser = {
  name: "Mayk Brito",
  avatar: "https://picsum.photos/200/300",
  city: "Recife"
}

// addUser(newUser)

// updateUser(updatedUser, 3)

deleteUser(5)

getUsers()
getUser(2)