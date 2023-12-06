import React, { useEffect, useState } from 'react';
import bannerRed from '../../assets/images/bannerRed.png';
import { ArrowDropDown } from '@mui/icons-material';
import DateModal from './DateModal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { dateState } from 'recoil/atoms/myPageAtom';
import ReservationCard from './ReservationCard';
import ReservationCardHeader from './ReservationCardHeader';
import { logout } from 'utils';
import { useNavigate } from 'react-router-dom';
import { getUserInfo } from '../../apis/myPageAPI';

import TopBtn from 'components/common/TopBtn';
import useScrollToShow from 'hooks/common/handleScroll';
import useQueryMyPage from 'hooks/myPage/useQueryMyPage';
import MyPageSkeleton from './skeleton/MyPageSkeleton';

const Inner = () => {
	const [now, setNow] = useState(3);
	const navigate = useNavigate();
	const [showDateModal, setShowDateModal] = useState(false);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const nowDate = useRecoilValue(dateState);
	const [date, setDate] = useRecoilState(dateState);
	const show = useScrollToShow(false, 200);

	useEffect(() => {
		setNow(date !== null ? parseInt(date.replace(/\D/g, ''), 10) : 0);
	}, [date, setDate]);

	const handleDateModalClose = () => {
		setShowDateModal(false);
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await getUserInfo();
				const { email, name } = res;
				setName(name);
				setEmail(email);
			} catch (e) {
				console.log(e);
			}
		};
		fetchData();
	}, []);

	const { data, isLoading } = useQueryMyPage(now);
	return (
		<div className="pt-20 min-h-screen m-auto bg-white max-w-[768px] mx-auto">
			<div className="pt-4.5 pl-6 pr-6 pb-7">
				<div className="flex justify-between items-center">
					<div className="text-content font-bold text-black cursor-default">
						{name}
					</div>

					<div
						className="text-xxsm text-textGray cursor-pointer"
						onClick={() => {
							logout();
							setDate('최근 3개월');
							navigate('/');
						}}
					>
						로그아웃
					</div>
				</div>
				<div className="text-md text-textGray pt-3 cursor-default">{email}</div>
				<div className="mt-[48px]">
					<img
						src={bannerRed}
						alt="bannerRed"
						className="w-full cursor-pointer"
						style={{ borderRadius: 10 }}
						onClick={() => {
							window.location.href =
								'https://www.yanolja.com/promotion/nol-promotion?eventcode=NOYLN';
						}}
					/>
					<div className="flex items-center justify-between">
						<div className="font-bold text-title pt-10 cursor-default">
							예약 내역
						</div>

						<div className="pt-10 ">
							<div
								className="flex items-center w-full h-9 border border-gray rounded-md cursor-pointer justify-between ml-3 hover:bg-lightGray pl-4"
								onClick={() => setShowDateModal(true)}
							>
								{nowDate}
								<ArrowDropDown />
							</div>
						</div>
					</div>
				</div>
			</div>

			<DateModal
				open={showDateModal}
				onClose={handleDateModalClose}
			></DateModal>
			{show && <TopBtn show={show} />}
			{isLoading && <MyPageSkeleton />}
			{data && data?.length > 0 && (
				<div className="pr-6 pl-6">
					{data?.map(
						(
							order: { orderDate: string; orderItems: any[] },
							index: React.Key | null | undefined,
						) => (
							<div
								key={index}
								className="border border-gray rounded-lg mb-8 shadow-md overflow-hidden"
							>
								<ReservationCardHeader orderDate={order.orderDate} />
								{order.orderItems?.map((item, itemIndex) => (
									<React.Fragment key={itemIndex}>
										<ReservationCard
											code={item.code}
											accomodationName={item.accommodation.name}
											accomodationImage={item.accommodation.image}
											checkinDate={item.checkinDate}
											checkoutDate={item.checkoutDate}
											isUsed={item.isUsed}
											accomodationId={item.accommodation.id}
											capacity={item.roomType.capacity}
											roomName={item.roomType.name}
										/>
									</React.Fragment>
								))}
							</div>
						),
					)}
				</div>
			)}
			{data?.length === 0 && (
				<>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							justifyContent: 'center',
							height: '100vh',
						}}
					>
						<div className="m-0 auto text-title pb-1">
							조회조건에 맞는 내역이 없습니다.
						</div>
						<div className="text-content text-textGray pb-2">
							상품을 예약해보세요
						</div>
						<div
							className="p-3 border border-blue rounded-md cursor-pointer text-blue text-content pl-10 pr-10"
							onClick={() => {
								navigate('/');
							}}
						>
							홈으로 가기
						</div>
					</div>
				</>
			)}
		</div>
	);
};

export default Inner;
