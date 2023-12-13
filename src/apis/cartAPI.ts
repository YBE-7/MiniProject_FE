import instance from './axios';
import { PostOrderItem, PostClient, PostSubscriber } from 'types/Orders';

export const postRoomToCart = (
	roomTypeId: number,
	checkInDate: string,
	checkOutDate: string,
) => {
	return instance.post('carts', {
		roomTypeId: roomTypeId,
		checkinDate: checkInDate,
		checkoutDate: checkOutDate,
	});
};

// 장바구니 개별 삭제
export const deleteCartItem = async (itemId: string) => {
	const res = await instance.delete(`carts/${itemId}`);
	return res.data;
};

// 장바구니 전체 삭제
export const allDeleteItem = async () => {
	const res = await instance.delete('carts');
	return res.data;
};

// 주문하기
export const postOrder = async (
	client: PostClient,
	subscriber: PostSubscriber,
	paymentMethod: string,
	orderItems: PostOrderItem[],
) => {
	const res = await instance.post('orders', {
		client: client,
		subscriber: subscriber,
		paymentMethod: paymentMethod,
		orderItems: orderItems,
	});
	return res.data;
};

// 주문 조희
export const getOrderCheck = async (orderId: number) => {
	const res = await instance.get(`orders/${orderId}`);
	return res.data;
};
