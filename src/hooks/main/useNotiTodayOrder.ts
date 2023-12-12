import { useEffect, useRef } from 'react';
import { getUserOrderInfo } from 'apis/myPageAPI';
import { useQuery } from 'react-query';
import { OrderItem, myOrder } from 'types/myPage.type';
import { getCookie } from 'utils';
import { foramtYYYYMMDD } from 'utils/formatDate';
import { useRecoilState } from 'recoil';
import { isFirstVisitState } from 'recoil/atoms/firstVisitAtom';

/**
 * accessToken 이 있으면 주문한 상품의 목록을 불러옵니다.
 * @returns data: 주문한 상품들의 목록, isLoading: 로딩중인지 여부
 */
const useNotiTodayOrder = () => {
	let myOrder: myOrder | undefined;
	const myOrderItems: OrderItem[] = [];
	const isSupported = 'Notification' in window;
	const notificationRef = useRef<Notification>();
	const [isFirstVisit, setIsFirstVisit] = useRecoilState(isFirstVisitState);

	const accessToken = getCookie('accessToken');
	if (accessToken) {
		const { data } = useQuery(['orders'], getUserOrderInfo, {
			retry: 0,
		});
		myOrder = data;
	}
	// 알림이 지원되는 브라우저는 알림 권한요청을 보냅니다.
	if (isSupported) Notification.requestPermission();

	useEffect(() => {
		const today = foramtYYYYMMDD(new Date());

		// 내가 예약한 상품중 주문상품들만 가져오기
		myOrder?.data.forEach((order) => {
			const orderItms = order.orderItems;
			myOrderItems.push(...orderItms);
		});
		// 체크인 날짜가 오늘인 예약 상품을 찾습니다.
		const todayOrder = myOrderItems.find(
			(order) => order.checkinDate === today,
		);

		// 알림이 허용되어있고, 오늘 입실할 예약이 있으면
		if (
			Notification.permission === 'granted' &&
			todayOrder !== undefined &&
			isFirstVisit
		) {
			notificationRef.current = new Notification(
				'[입실안내] 오늘 입실해야할 예약이 있습니다.',
				{
					body:
						'예약번호 : ' +
						todayOrder.id +
						' / 숙소이름 : ' +
						todayOrder.accommodation.name +
						'\n체크인 시간 : 15:00',
					icon: todayOrder.accommodation.image,
				},
			);
			setIsFirstVisit(false);
		}
	}, [myOrder, isFirstVisit]);
};

export default useNotiTodayOrder;
