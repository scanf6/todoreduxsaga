import {todoInstance as axios} from './index';

const api = {
    get: () => axios.get('/'),
    show: (id) => axios.get(`/${id}`)
};

export default api;