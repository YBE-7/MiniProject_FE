import React, { useEffect, useRef, useState } from 'react';
import CommonHeader from 'components/common/CommonHeader';
import banner from '../../assets/images/banner.png';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Footer from 'components/placeDetail/Footer';
import RoomItem from 'components/placeDetail/RoomItem';
import SoldOutRoomItem from 'components/placeDetail/SoldOutRoomItem';
import KakaoMap from 'components/placeDetail/KakaoMap';
import RoomIcon from '@mui/icons-material/Room';
import CalendarModal from 'components/common/CalendarModal';
import { formatFullDateRangeWithoutYear } from 'utils/formatDate';
import { useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import ImageSwiper from 'components/common/ImageSwiper';
import { useParams, useLocation } from 'react-router';
import { PlaceDetailInfo } from 'types/Place';
import { capacityState } from 'recoil/atoms/capacityAtom';
import RegionProdCapacityModal from 'components/region/RegionProdCapacityModal';
import swal from 'sweetalert';
import useScrollToShow from 'hooks/common/handleScroll';
import TopBtn from 'components/common/TopBtn';
import Services from 'components/common/Services';
import useGetAccommodationDetailInfo from 'hooks/placeDetail/useGetAccommodationDetailInfo';
import useGetRoomsInfo from 'hooks/roomDetail/useGetRoomsInfo';
import PlaceDetailSkeleton from 'components/placeDetail/PlaceDetailSkeleton';
import useScrollToTop from 'hooks/common/useScrollToTop';
import { Button, Tooltip } from '@material-tailwind/react';
import { Share } from '@mui/icons-material';
import useKakaoShare from 'hooks/placeDetail/useKakaoShare';

export default function PlaceDetail() {
	const location = useLocation();
	const { accommodationdId } = useParams();
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCapacityModalOpen, setIsCapacityModalOpen] = useState(false);
	const checkInDate = useRecoilValue<Date>(checkInDateState);
	const checkOutDate = useRecoilValue<Date>(checkOutDateState);
	const [formattingDate, setFormattingDate] = useState(
		formatFullDateRangeWithoutYear(checkInDate, checkOutDate),
	);
	const capacityValue = useRecoilValue(capacityState);
	const show = useScrollToShow(false, 200);
	const [isLoading, accommodationInfo] = useGetAccommodationDetailInfo(
		accommodationdId,
	) as [boolean, PlaceDetailInfo];
	const roomsInfo = useGetRoomsInfo(accommodationdId);
	const mapRef = useRef<HTMLDivElement | null>(null);

	useScrollToTop();

	// 카카오톡 메시지 공유 hooks
	const { handleKakaoShare } = useKakaoShare(
		location.pathname,
		accommodationInfo,
		roomsInfo,
	);

	useEffect(() => {
		setFormattingDate(
			formatFullDateRangeWithoutYear(checkInDate, checkOutDate),
		);
	}, [checkInDate, checkOutDate]);

	const handleCalendarClick = () => {
		setIsModalOpen((prev) => !prev);
	};

	const handleCapacityClick = () => {
		setIsCapacityModalOpen((prev) => !prev);
	};

	const handleCopyBtnClick = () => {
		if (accommodationInfo?.location.address !== undefined) {
			navigator.clipboard
				.writeText(accommodationInfo.location.address)
				.then(() => {
					swal('주소가 복사되었습니다.', { icon: 'success' });
				})
				.catch((error) => {
					swal('주소 복사에 실패했습니다.', { icon: 'error' });
					console.error('Error copying text: ', error);
				});
		}
	};

	const handleAddressClick = () => {
		mapRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	const handleCopyClipBoard = async () => {
		try {
			await navigator.clipboard.writeText(
				'https://mini-team-7.vercel.app' + location.pathname,
			);
			swal('클립보드에 링크가 복사되었어요.', { icon: 'success' });
		} catch (err) {
			console.log(err);
		}
	};

	if (isLoading) {
		return <PlaceDetailSkeleton />;
	}

	return (
		<div className="justify-center m-auto text-content text-black">
			<CalendarModal isOpen={isModalOpen} handleOpen={handleCalendarClick} />
			<RegionProdCapacityModal
				isOpen={isCapacityModalOpen}
				handleOpen={handleCapacityClick}
			/>
			<CommonHeader name={accommodationInfo?.name} isHomeIcon isCartIcon />
			<div className="relative mt-[48px] flex-row">
				<div className="ml-[-1.25rem] mr-[-1.25rem]">
					<ImageSwiper items={accommodationInfo?.images} />
				</div>
				<div className="pt-3">
					<div className="lg:flex w-full lg:justify-between">
						<p className="text-lg font-bold">{accommodationInfo?.name}</p>
						<div className="w-[76px] ml-auto h-8">
							<Tooltip content="링크 주소 복사">
								<Button
									onClick={handleCopyClipBoard}
									size="sm"
									variant="text"
									className="p-2"
								>
									<Share sx={{ fontSize: '1.25rem' }} />
								</Button>
							</Tooltip>
							<Tooltip content="카카오톡 공유">
								<Button
									onClick={handleKakaoShare}
									size="sm"
									variant="text"
									className="p-2"
								>
									<img
										src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
										alt="카카오톡 공유 보내기 버튼"
										width={24}
									/>
								</Button>
							</Tooltip>
						</div>
					</div>
					<div className="flex items-center pt-[6px] pb-[2px]">
						<LocationOnIcon sx={{ fill: '#0152cc' }} fontSize="small" />
						<span
							className="text-blue font-bold text-content cursor-pointer"
							onClick={handleAddressClick}
						>
							{accommodationInfo?.location.address}
						</span>
						<KeyboardArrowRightIcon sx={{ fill: '#0152cc' }} />
					</div>
					<div className="flex items-center pt-[2px] font-bold">
						<StarIcon fontSize="small" sx={{ fill: '#FDBD00' }} />
						{accommodationInfo?.star}
					</div>
				</div>
				<a
					href="https://www.yanolja.com/promotion/nol-promotion?eventcode=NOYHH"
					target="_blank"
					rel="noreferrer"
				>
					<img
						src={banner}
						alt="배너 이미지"
						className="w-full mx-auto rounded-md pt-2"
					/>
				</a>
				<div className="pt-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold ">객실 선택</p>
					</div>
					<div className="flex w-full text-content font-bold text-black">
						<button
							className="w-3/4 lg:w-1/2 flex items-start border border-borderGray rounded px-3 py-[11px]"
							onClick={handleCalendarClick}
						>
							{formattingDate}
						</button>
						<button
							className="w-1/4 lg:w-1/2 flex items-start border border-borderGray rounded px-3 py-[11px]"
							onClick={handleCapacityClick}
						>
							성인 {capacityValue}
						</button>
					</div>

					{roomsInfo?.map((roomItem, index) =>
						roomItem.status !== 'NO_STOCK' ? (
							<RoomItem
								key={index}
								roomItem={roomItem}
								name={accommodationInfo?.name}
							/>
						) : (
							<SoldOutRoomItem
								key={index}
								roomItem={roomItem}
								name={accommodationInfo?.name}
							/>
						),
					)}
				</div>
				<div className="pt-5" ref={mapRef}>
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold">위치/교통</p>
					</div>
					<KakaoMap
						latitude={accommodationInfo?.location.latitude}
						longitude={accommodationInfo?.location.longitude}
					/>
					<div className="flex items-center py-3">
						<RoomIcon
							className="mr-1"
							sx={{ fill: '#cccccc', fontSize: '16px' }}
						/>
						<p>{accommodationInfo?.location.address}</p>
					</div>
					<button
						className="w-full border border-gray py-[6px] rounded-sm text-sm hover:bg-bgGray"
						onClick={handleCopyBtnClick}
					>
						주소복사
					</button>
				</div>
				<div className="pt-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold">숙소소개</p>
					</div>
					<p>{accommodationInfo?.introduction}</p>
				</div>
				<Services services={accommodationInfo?.services} />
				<div className="py-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold ">취소 안내</p>
					</div>
					<ul className="list-disc pl-5">
						<li className="pb-2">
							{' '}
							취소 및 환불이 불가한 숙소 상품을 예약한 경우도 예약 완료 후 일정
							시간 이내에 무료로 취소할 수 있습니다.
						</li>
						<li>
							{' '}
							&apos;취소불가&apos;로 표기되더라도 객실별 기본 정보의 취소규정이
							&apos;취소가능&apos;으로 제공되는 경우 고객센터를 통해 취소
							가능합니다.
						</li>
					</ul>
					<table className="min-w-full table-fixed border-collapse my-5">
						<thead className="bg-lightGray">
							<tr className="bg-lightGray">
								<th className="bg-lightGray border-lightGray px-4 py-2 text-left">
									상황
								</th>
								<th className="bg-lightGray border-lightGray px-4 py-2 text-left">
									무료 취소 가능 시간
								</th>
							</tr>
						</thead>
						<tbody className="text-textGray">
							<tr>
								<td className="border-lightGray border px-4 py-2">
									예약 완료 후 체크인 시간까지 하루 전
								</td>
								<td className="border-lightGray border px-4 py-2">
									체크인 시간 전까지
								</td>
							</tr>
							<tr>
								<td className="border-lightGray border px-4 py-2">
									체크인 시간 이후 예약 완료한 경우
								</td>
								<td className="border-lightGray border px-4 py-2">
									무료 취소 불가
								</td>
							</tr>
						</tbody>
					</table>
				</div>
				<Footer />
				{show && <TopBtn show={show} />}
			</div>
		</div>
	);
}
