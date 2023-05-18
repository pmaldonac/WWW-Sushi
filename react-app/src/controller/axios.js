import { Component } from "react";
import axios from 'axios'

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/empresas/'
})

export default class Axios_API extends Component {

    state = {
        courses: []
    }
    constructor() {
        super();
        api.get('/').then(res => {
             console.log(res.data)
             this.setState({courses: res.data})
        })
    }
}