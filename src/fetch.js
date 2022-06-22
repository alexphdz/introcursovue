const apiKey = 'oSHtnmKGaypoV6Zo441LB1Ua6ho7Xhao';

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(res => res.json())
    .then(({ data }) => {
        const { url } = data.images.original
        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })

