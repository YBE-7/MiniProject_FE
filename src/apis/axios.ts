import axios from 'axios';
import { SERVER_URL } from './constants';
import { getCookie } from 'utils';

const instance = axios.create({
	baseURL: SERVER_URL,
	headers: {
		Accept: 'application/json',
	},
});

instance.interceptors.request.use(
	(config) => {
		const accessToken = getCookie('accessToken');
		if (accessToken) {
			config.headers['Authorization'] = `Bearer ${accessToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export default instance;
