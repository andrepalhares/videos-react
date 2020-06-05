import axios from 'axios';

const KEY = 'AIzaSyDo-S-D9GATTghkULBUE1rEijJzXZ_K9VQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: `${KEY}`,
    }
});