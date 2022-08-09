export const getUrls = () => {
  return fetch('http://localhost:3001/api/v1/urls')
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        return new Error("Oops, something happened! Please try again.")
      }
    })
}

export const postUrl = (newUrl) => {
  return fetch('http://localhost:3001/api/v1/urls', {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(newUrl)
  })
    .then(res => {
      if(res.ok) {
        return res.json()
      } else {
        return new Error("Oops, something happened! Please try again.")
      }
    })
}
