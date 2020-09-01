import { useState, useEffect } from 'react'; 
import youtube from '../apis/youtube'; 

const KEY = 'AIzaSyDWWPg3VzqBve52O5XezZzgngopTjm-9lA'; 
//const KEY = 'AIzaSyBXAyimeyDQaq0xckMpjEG4NzYGJR_XTbg';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]); 

    useEffect(() => {
        search(defaultSearchTerm); 
    }, [defaultSearchTerm]); 

    const search = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 7,
                key: KEY, 
                q: term
            }
        }); 

        setVideos(response.data.items); 
    }; 
    
    return [videos, search]; 
}; 

export default useVideos; 