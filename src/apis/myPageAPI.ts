import instance from './axios';
import { myOrder } from 'types/myPage.type';

export const getUserInfo = async () => {
	const res = await instance.get('members/mypage');
	return res.data.data;
};

export const getUserOrderInfo = async () => {
	const res = await instance.get<myOrder>('members/orders');
	return res.data;
};
