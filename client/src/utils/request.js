import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
});

export const get = async (path, options) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, data) => {
    const response = await request.post(path, data);
    return response.data;
};

export default request;
