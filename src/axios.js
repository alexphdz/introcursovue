import axios from "axios";

const api_key = 'oSHtnmKGaypoV6Zo441LB1Ua6ho7Xhao';

const giphyApi = axios.create({
    baseURL: 'https://api.giphy.com/v1/gifs',
    params:{
        api_key
    }
})

giphyApi.get('/random').then( res => {
    const { data } = res.data;
    const { url }  = data.images.original
    
    const img  = document.createElement('img')
    img.src = url
    document.body.append(img)
})

export default giphyApi