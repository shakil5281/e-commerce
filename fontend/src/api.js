import axios from 'axios'
const searchImages = async() =>{
    const {data} = await axios.get('https://api.unsplash.com/search/photos/', {
        headers:{
            Authorization: `Client-ID 2-16GJgKe4jfnKdjfivPu8yI3YnrAHTmfQYAa3nKsgc`
        },
        params: {
            query: 'nuture'
        },
    });
    return data;
}

export default searchImages;




