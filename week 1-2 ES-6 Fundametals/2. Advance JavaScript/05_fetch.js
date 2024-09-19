// Fetch

fetch('https://api.github.com/users/hiteshchoudhary')
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.log(err)
    )