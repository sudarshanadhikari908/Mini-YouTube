import axios from 'axios';

const KEY = 'AIzaSyDpxM_pB4cOh7uPLcNsYX3gJIgxz3-WAk8'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});