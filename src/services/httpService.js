import axios from 'axios';

axios.interceptors.response.use(null, error => {
    const expectedError = error.reponse && error.response.status >= 400 && error.response.status <= 500;
    if (!expectedError) {
        console.log('Unexpected error');
    }
    return Promise.reject(error);
});

export default {
    get: axios.get
}