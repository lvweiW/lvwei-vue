import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 20000,
    headers: {'X-Custom-Header': 'foobar'}
});

export const $get = async (url, params) => {
    return await instance.get(url, {params})
}

export const $post = async (url, params) => {
    return await instance.post(url, params)
}