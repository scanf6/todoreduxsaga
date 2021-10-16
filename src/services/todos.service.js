import {todoInstance as axios} from './index';

const api = {
    get: () => axios.get('/'),
};

export default api;