import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
});

export const get = async (path, options) => {
    const response = await request.get(path, options);
    return response.data;
};

export const post = async (path, data, token) => {
    const response = await request.post(path, data, {
        headers: {
            token: `Bearer ${token}`,
        },
    });
    return response.data;
};

export default request;
