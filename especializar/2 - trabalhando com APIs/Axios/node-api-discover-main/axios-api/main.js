const url = "http://localhost:5500/api"

function getUsers() {
  axios
    .get(url)
    .then(response => {
      // Elemento com id no HTML, através da DOM, acessamos diretamente
      // textContent: função para manipular o conteúdo do HTML
      // JSON.stringify: utilizado para transformar o objeto HTML em texto simples
      apiResult.textContent = JSON.stringify(response.data) 
    })
    .catch(error => console.error(error))
}
 
// Responsável por mandar informações para dentro da API
function addNewUser(newUser) {
  // É preciso enviar no axios um usuário
  axios.post(url, newUser)
    .then(response => {
      console.log(response)
    }) 
    .catch(error => console.error(error))
}

function getUser(id) {
  axios.get(`${url}/${id}`)
    .then(response => {
      const data = response.data
      userName.textContent = data.name
      userCity.textContent = data.city
      userID.textContent = data.id
      userAvatar.src = data.avatar
    })
    .catch(error => console.error(error))
} 

function updateUser(id, userUpdated) {
  axios.put(`${url}/${id}`, userUpdated) // URL, objeto
    .then(response => {
      console.log(response)
    })
    .catch(error => console.error(error))
}

function deleteUser(id) {
  axios.delete(`${url}, ${id}`)
    .then(response => console.log(response))
    .catch(error => console.error(error))

}


const newUser = {
  name: "Olivia Zars",
  avatar: "https://picsum.photos/200/300",
  city: "Rio de Janeiro"
}

const userUpdated = {
  name: "Marcelo Calvis",
  avatar: "https://picsum.photos/200/300",
  city: "Recife"  
}

getUsers()
addNewUser(newUser)
deleteUser(4)  

// getUser(1)


// updateUser(3, userUpdated)
