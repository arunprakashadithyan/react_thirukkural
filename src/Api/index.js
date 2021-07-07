import axios from 'axios'

export default class Api {
    
    static getSections = (cb) => {
        axios.get('https://api.gokulnath.com/thirukkuralsections/')
        .then(response => cb(response.data.Data))
        .catch(err=>console.log(err));
    }
}