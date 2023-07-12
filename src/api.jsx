import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID T_J9Hzc7_vUq0uORJzUS9u4PNShndxZ3GsfoqKAkX7I',
        },
        params: {
            query: term,
            per_page: 1
        },
    });
    return response.data.results[0].urls.full;
};

export default searchImages;
