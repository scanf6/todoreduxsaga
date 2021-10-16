// This file contains the default Axios configuration

import axios from "axios";

export const todoInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/todos'
});