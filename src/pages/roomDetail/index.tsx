import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from 'components/roomDetail/Header';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SmokeFreeIcon from '@mui/icons-material/SmokeFree';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import Footer from 'components/roomDetail/Footer';
import ImageSwiper from 'components/common/ImageSwiper';
import { useLocation, useParams } from 'react-router';
import { RoomDetailInfo } from 'types/Place';
import { useRecoilValue } from 'recoil';
import { checkInDateState } from 'recoil/atoms/dateAtom';
import { getDayBeforeCheckIn, getDaysBeforeCheckIn } from 'utils/formatDate';
import TopBtn from 'components/common/TopBtn';
import useScrollToShow from 'hooks/common/handleScroll';
import Services from 'components/common/Services';
import useSetFreeCancleDate from 'hooks/roomDetail/useSetFreeCancleDate';
import useScrollToTop from 'hooks/common/useScrollToTop';
import useGetRoomDetailInfo from 'hooks/roomDetail/useGetRoomDetailInfo';
import RoomDetailSkeleton from 'components/roomDetail/RoomDetailSkeleton';

export default function RoomDetail() {
	const { roomId } = useParams();
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const name = queryParams.get('name');
	const status = queryParams.get('status');
	const price = queryParams.get('price');
	const checkInDate = useRecoilValue(checkInDateState);
	const [datesBeforeCheckIn, setDatesBeforeCheckIn] = useState<string[]>([]);
	const freeCancle = useSetFreeCancleDate();
	const cancleDate = getDayBeforeCheckIn(checkInDate);
	const show = useScrollToShow(false, 200);
	const navigate = useNavigate();
	const [isLoading, roomInfo, formattedPrice] = useGetRoomDetailInfo(roomId, price) as [boolean, RoomDetailInfo, string];

	useScrollToTop();

	useEffect(() => {
		const dates = [];
		for (let i = 0; i <= 5; i++) {
			dates.push(getDaysBeforeCheckIn(checkInDate, i));
		}
		setDatesBeforeCheckIn(dates);
	}, [checkInDate]);

	const handleBackBtnClick = () => {
		navigate(-1);
	};

	 if(isLoading) {
		return <RoomDetailSkeleton />
	}

	return (
		<div className="justify-center m-auto text-content text-black">
			<Header />
			<div className="relative mt-[48px] flex-row">
				<div className="max-w-none ml-[-1.25rem] mr-[-1.25rem]">
					<ImageSwiper items={roomInfo?.images} />
				</div>
				<div className="pt-3">
					<div className="flex w-full justify-between">
						<div>
							<p className="text-lg font-bold text-black">{roomInfo?.name}</p>
							<p className="text-content">{roomInfo?.introduction}</p>
						</div>
					</div>

					<div
						className="mt-[13px] cursor-pointer"
						onClick={handleBackBtnClick}
					>
						<p className="text-sm">
							{name} <KeyboardArrowRightIcon sx={{ fontSize: '14px' }} />
						</p>
					</div>
				</div>

				<div className="py-3 flex flex-col gap-y-[0.6px]">
					<div className="flex gap-x-0.5 text-secondaryTextGray mt-2">
						<PersonOutlineIcon fontSize="small" />
						<p>기준2인 / 최대 {roomInfo?.capacity}인</p>
					</div>
					<div className="flex gap-x-0.5 text-secondaryTextGray mt-2">
						<SmokeFreeIcon fontSize="small" />
						<p>금연 객실</p>
					</div>
				</div>
				<Services services={roomInfo?.services}/>
				<div className="border border-borderGray p-4 rounded-lg mt-5">
					<div>
						<span className="text-sm text-black font-bold">숙박</span>
						<p className="text-sm text-textGray py-1">
							체크인 <span className="font-semibold">15:00</span> ~ 체크아웃{' '}
							<span className="font-semibold">11:00</span>
						</p>
					</div>
					<div className="flex flex-col items-end">
						<div className="flex items-center">
							<p className="text-title font-bold text-black">
								{formattedPrice}원
							</p>
							<ErrorOutlineIcon sx={{ fontSize: '16px' }} />
						</div>
						<div className="flex items-center">
							<p className="text-green text-sm font-bold ml-3">
								{freeCancle
									? `무료취소 (${cancleDate} 17:00전까지)`
									: `취소 및 환불 불가`}
							</p>
							<KeyboardArrowRightIcon
								sx={{ fill: '#008161', fontSize: '16px' }}
							/>
						</div>
					</div>
				</div>
				<div className="pt-5">
					<p className="text-title text-black font-bold">취소 수수료</p>
					<table className="min-w-full table-fixed border-collapse my-5">
						<thead className="bg-lightGray">
							<tr className="bg-lightGray">
								<th className="bg-lightGray border-lightGray px-4 py-2 text-left">
									기간
								</th>
								<th className="bg-lightGray border-lightGray px-4 py-2 text-left">
									취소수수료율
								</th>
							</tr>
						</thead>
						<tbody className="text-textGray">
							<tr>
								<td className="border-lightGray border px-4 py-2">
									{datesBeforeCheckIn[4]} 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									총 판매가의 0%
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									{datesBeforeCheckIn[3]} 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									총 판매가의 30%
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									{datesBeforeCheckIn[2]} 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									총 판매가의 50%
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									{datesBeforeCheckIn[1]} 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									총 판매가의 100%
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									{datesBeforeCheckIn[0]} 17:00전까지
								</td>
								<td className="border-lightGray border px-4 py-2">
									취소 및 환불 불가
								</td>
							</tr>
						</tbody>
					</table>
					<ul className="list-disc my-2 pb-[70px] pl-5">
						<li className="pb-2">
							{' '}
							연박(2일 이상의 숙박) 예약 시, 예약하신 각 투숙일 별 최소
							수수료율이 차등 적용됩니다.
						</li>
						<li className="pb-2">
							{' '}
							일부 숙박시설은 해당 숙박시설의 취소ㆍ환불 정책이 적용됩니다.
							반드시 각 기간별 취소수수료 발생 여부를 확인하시고 예약
							부탁드립니다.
						</li>
						<li className="pb-2">
							{' '}
							취소 규정은 입실일(체크인 일자) 기준으로 적용됩니다.
						</li>
						<li className="pb-2">
							{' '}
							취소수수료는 쿠폰 및 포인트와 같은 할인금액을 제외하지 아니한 전체
							예약 금액을 기준으로 계산됩니다.
						</li>
					</ul>
				</div>
			</div>
			<Footer
				formattedPrice={formattedPrice}
				roomInfo={roomInfo}
				status={status}
				name={name}
			/>
			{show && <TopBtn show={show} isOverlap />}
		</div>
	);
}
