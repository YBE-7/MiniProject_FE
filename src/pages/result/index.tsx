import React, { useState, useEffect } from 'react';
// import Header from 'components/common/Header';
import CommonHeader from 'components/common/CommonHeader';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import ResultFooter from 'components/Footer/ResultFooter';
import { useNavigate } from 'react-router-dom';
import { getOrderCheck } from 'apis/cartAPI';
import { useRecoilValue } from 'recoil';
import { orderIdState } from 'recoil/atoms/orderAtom';
import { OrderData, OrderItems } from 'types/Orders';
import swal from 'sweetalert';
import { requireLogin } from 'hooks/common/isAcessToken';
import { formatNumberWithCommas } from 'utils/numberComma';

import styles from '../../components/cart/Cart.module.css';
import { getDayOfWeek } from 'hooks/common/getDayOfWeek';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import TopBtn from 'components/common/TopBtn';
import useScrollToShow from 'hooks/common/handleScroll';

const result = () => {
	requireLogin();
	const navigate = useNavigate();

	// recoil로 id 받아오기
	const orderId = useRecoilValue(orderIdState);

	// 주문 결과 데이터
	const [orderData, setOrderData] = useState<OrderData>();

	// 주문 객실 상품 데이터
	const [orderItem, setOrderItem] = useState<OrderItems>();

	const [item, setItem] = useState(true);
	const [subscriber, setSubscriber] = useState(true);
	const [user, setUser] = useState(true);

	const show = useScrollToShow(false, 200);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getOrderCheck(orderId);
				setOrderData(res.data);
				setOrderItem(res.data.orderItems);
			} catch (error) {
				console.error('Error fetching data:', error);
				swal({ title: '예상치 못한 오류가 발생했습니다.', icon: 'error' });
			}
		};

		fetchData();
	}, []);

	const formattedTime = (time: string) => {
		return new Date(time).toLocaleString('ko-KR', {
			year: 'numeric',
			month: 'numeric',
			day: 'numeric',
			hour: 'numeric',
			minute: 'numeric',
		});
	};

	const toggleItem = () => {
		setItem((prevState) => !prevState);
	};

	const toggleSubscriber = () => {
		setSubscriber((prevState) => !prevState);
	};

	const toggleUser = () => {
		setUser((prevState) => !prevState);
	};

	return (
		<>
			{orderData && orderItem && (
				<div>
					<CommonHeader name="주문 결과" isHomeIcon />
					{/* <Header title="주문 결과" /> */}
					<div className="bg-white fixed left-0 top-[48px] w-screen drop-shadow-sm">
						<div className="flex h-[48px] justify-center items-center px-4 w-full lg:max-w-[768px] m-auto top-0 left-0">
							<div className="flex flex-col justify-center items-center ">
								<div className=" font-semibold text-content">
									예약이 완료되었습니다.
								</div>
								<div className=" text-sm">
									예약 일시 : {formattedTime(orderData.orderTime)}
								</div>
							</div>
						</div>
					</div>
					<div className={styles.subWrap}>
						<div>
							<div className="flex justify-between items-center ">
								<div className="text-content font-semibold pb-1 ">
									상품 정보 {orderData.orderItems.length}건
								</div>
								{item ? (
									<ExpandLessRoundedIcon
										onClick={toggleItem}
										className="cursor-pointer"
									/>
								) : (
									<ExpandMoreOutlinedIcon
										onClick={toggleItem}
										className="cursor-pointer"
									/>
								)}
							</div>
							{item
								? orderData.orderItems.map((item) => (
										<div key={item.id} className=" mb-2">
											<div>
												<div className="text-content font-semibold py-1">
													{item.accommodation.name}
												</div>
												<div className="flex">
													<div>
														<img
															className="h-20 w-20  rounded-sm"
															src={item.accommodation.image}
														></img>
													</div>
													<div className="flex flex-col pl-3 gap-1">
														<div className="text-md">{item.roomType.name}</div>
														<div className="text-xs ">
															{item.checkinDate}(
															{getDayOfWeek(item.checkinDate)}) ~{' '}
															{item.checkoutDate}(
															{getDayOfWeek(item.checkoutDate)}) | 1박
														</div>
														<div className="text-xxsm text-textGray ">
															체크인 15:00 | 체크아웃 11:00
														</div>
														<div className="flex items-center ">
															<div className="text-xxsm text-textGray ">
																숙소 예약 번호 :
															</div>
															<div className="text-xxsm text-textGray pl-1">
																{item.code}
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
								  ))
								: null}
						</div>
					</div>

					<div className={styles.subWrap}>
						<div className="flex justify-between items-center py-3 ">
							<div className="text-content font-semibold "> 예약자 정보</div>

							{subscriber ? (
								<ExpandLessRoundedIcon
									onClick={toggleSubscriber}
									className="cursor-pointer"
								/>
							) : (
								<ExpandMoreOutlinedIcon
									onClick={toggleSubscriber}
									className="cursor-pointer"
								/>
							)}
						</div>
						{subscriber ? (
							<>
								{' '}
								<div className="flex justify-between items-center py-1">
									<div className="text-md">이름</div>
									<div className="text-md"> {orderData.subscriber.name}</div>
								</div>
								<div className="flex justify-between items-center py-2">
									<div className="text-md">휴대폰 번호</div>
									<div className="text-md">
										{' '}
										{orderData.subscriber.phoneNumber}
									</div>
								</div>{' '}
							</>
						) : null}
					</div>
					<div className={styles.subWrap}>
						<div className="flex justify-between items-center py-3 ">
							<div className="text-content font-semibold "> 이용자 정보</div>

							{user ? (
								<ExpandLessRoundedIcon
									onClick={toggleUser}
									className="cursor-pointer"
								/>
							) : (
								<ExpandMoreOutlinedIcon
									onClick={toggleUser}
									className="cursor-pointer"
								/>
							)}
						</div>
						{user ? (
							<>
								{' '}
								<div className="flex justify-between items-center py-1">
									<div className="text-md">이름</div>
									<div className="text-md"> {orderData.client.name}</div>
								</div>
								<div className="flex justify-between items-center py-2">
									<div className="text-md">휴대폰 번호</div>
									<div className="text-md"> {orderData.client.phoneNumber}</div>
								</div>
							</>
						) : null}
					</div>
					<div className={styles.subWrap}>
						<div className="text-content font-semibold py-3 "> 예약 정보</div>

						<div className="flex justify-between items-center py-1">
							<div className="text-md">통합 주문번호</div>
							<div className="text-md">{orderData.reservationInfo.code}</div>
						</div>

						<div className="flex justify-between items-center py-2">
							<div className="text-md">결제 수단</div>
							<div className="text-md">
								{orderData.reservationInfo.paymentMethod}
							</div>
						</div>
					</div>
					<div className={styles.subWrap}>
						<div className="text-content font-semibold py-3 "> 결제 금액</div>

						<div className="flex justify-between items-center py-1">
							<div className="text-md">상품 금액</div>
							<div className="text-md">
								{' '}
								{formatNumberWithCommas(orderData.totalPrice)} 원
							</div>
						</div>
					</div>
					<div className={styles.subWrap}>
						<div className="flex justify-between items-center py-1">
							<div className="text-md">총 결제 금액</div>
							<div className="text-title font-semibold py-3 ">
								{formatNumberWithCommas(orderData.totalPrice)} 원
							</div>
						</div>
					</div>

					<div className="w-full lg:max-w-3xl m-auto top-0 left-0 py-5">
						<button
							onClick={() => {
								navigate('/');
							}}
							className="flex font-semibold text-content justify-center items-center w-full py-5 px-3 text-center bg-secondary rounded-md h-[20px]  text-white hover:bg-hoverSecondary"
						>
							홈으로
						</button>
					</div>
				</div>
			)}
			{show && <TopBtn show={show} isOverlap />}
			<ResultFooter />
		</>
	);
};

export default result;
