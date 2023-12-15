import instance from './axios';

export const postJoin = async (
	email: string,
	password: string,
	name: string,
) => {
	const res = await instance.post('members/signup', {
		email: email,
		password: password,
		name: name,
	});
	return res.data;
};
