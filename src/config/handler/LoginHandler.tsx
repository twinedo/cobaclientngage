import LoginAPI from '../service/LoginAPI';

export interface LoginParamsType {
    username: string;
    password: string;
    mobile?: string;
    captcha?: string;
    type?: string;
}

//hit api login

export const LoginHandler = async (params: LoginParamsType) => {
    try {
        const response = await LoginAPI.post(
            '/api/videoapi/VideoAPI/AuthTenant',
            params
        );
        var res = response && response.data;
        const token = res.token?.split(' ');
        if (res && res.code === '001') {
            // console.log('token', token)
            if (token && token[1]) {
                localStorage.setItem('@token-ngage-client', token[1]);
                return Promise.resolve(response.data);
            }
        } else {
            return Promise.reject(res.message);
        }
    } catch (error) {
        console.log('error login', error);
        return Promise.reject(error);
    }
};
