import axios from 'axios';

const instance = axios;

instance.interceptors.request.use(
    async (config) => {
        var token = localStorage.getItem('@token-ngage-client')
            ? JSON.parse(localStorage.getItem('@token-ngage-client') || 'null')
            : null;
        if (token !== null) {
            config.headers.token = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export const HandlerAPI = async (
    url: string,
    method: any,
    params: any,
    data: any,
    headers: any,
    responType: any,
    cancelToken: any
) => {
    const service = await instance({
        url: url,
        method: method,
        params: params,
        data: data,
        headers: headers,
        responseType: responType,
        cancelToken: cancelToken,
    });
    return service;
};
