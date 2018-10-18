import http from './httpService';
import config from '../config.json';

export function getPhones() {
    return http.get(`${config.api}/phones`);
}