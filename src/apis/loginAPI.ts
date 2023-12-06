import instance from './axios';
export const postLogin = async (email: string, password: string) => {
	const res = await instance.post('members/login', {
		email: email,
		password: password,
	});
	return res.data.data;
};
