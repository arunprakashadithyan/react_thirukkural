import axios from 'axios'

export default class Api {
    
    static getSections = (cb) => {
        axios.get('https://api.gokulnath.com/thirukkuralsections/')
        .then(response => cb(response.data.Data))
        .catch(err=>console.log(err));
    }

    static getChapters = (index,cb) => {
        axios.get(`https://api.gokulnath.com/thirukkuralsections/${index}/chapters`)
        .then(response => cb(response.data.Data))
        .catch(err => console.log(err));
    }

    static getKurals = (index, cb) => {
        axios.get(`https://api.gokulnath.com/thirukkuralchapters/${index}/thirukkurals`)
        .then(response => cb(response.data.Data))
        .catch(err => console.log(err));
    }

    static getOneKural = (index, cb) => {
        axios.get(`https://api.gokulnath.com/thirukkurals/${index}`)
        .then(response => cb(response.data.Data))
        .catch(err => console.log(err));
    }

    static getComChapters = (cb) => {
        axios.get(`https://api.gokulnath.com/thirukkuralchapters/`)
        .then(response => cb(response.data.Data))
        .catch(err => console.log(err));
    }
}