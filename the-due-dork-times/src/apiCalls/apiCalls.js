

function apiCall() {
  const apiUrl = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=714809d8bf034b16826bde40f32395c0'


  return fetch(apiUrl)
    .then(response => {
      if(!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .catch(error => {
      console.log('Error', error)
    })
}

export default apiCall



