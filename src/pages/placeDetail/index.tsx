// import Header from 'components/placeDetail/Header';
import React, { useEffect, useRef, useState } from 'react';
import CommonHeader from 'components/common/CommonHeader';
import banner from '../../assets/images/banner.png';
import StarIcon from '@mui/icons-material/Star';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import Footer from 'components/placeDetail/Footer';
import CheckIcon from '@mui/icons-material/Check';
import RoomItem from 'components/placeDetail/RoomItem';
import SoldOutRoomItem from 'components/placeDetail/SoldOutRoomItem';
import KakaoMap from 'components/placeDetail/KakaoMap';
import RoomIcon from '@mui/icons-material/Room';
import CalendarModal from 'components/common/CalendarModal';
import { formatFullDateRangeWithoutYear } from 'utils/formatDate';
import { useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import ImageSwiper from 'components/common/ImageSwiper';
import { useParams } from 'react-router';
import { PlaceDetailInfo, RoomDetailInfos } from 'types/Place';
import accommodationAPI from 'apis/accommodationAPI';
import Loading from 'components/placeDetail/Loading';
import { capacityState } from 'recoil/atoms/capacityAtom';
import RegionProdCapacityModal from 'components/region/RegionProdCapacityModal';
import swal from 'sweetalert';
import useScrollToShow from 'hooks/common/handleScroll';
import TopBtn from 'components/common/TopBtn';

export default function PlaceDetail() {
	const { accommodationdId } = useParams();
	const [accommodationInfo, setAccommodationInfo] = useState<PlaceDetailInfo>();
	const [roomsInfo, setRoomsInfo] = useState<RoomDetailInfos[]>();
	const [isLoading, setIsLoading] = useState(true);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCapacityModalOpen, setIsCapacityModalOpen] = useState(false);

	const checkInDate = useRecoilValue<Date>(checkInDateState);
	const checkOutDate = useRecoilValue<Date>(checkOutDateState);
	const [formattingDate, setFormattingDate] = useState(
		formatFullDateRangeWithoutYear(checkInDate, checkOutDate),
	);
	const capacityValue = useRecoilValue(capacityState);
	const show = useScrollToShow(false, 200);

	const getAccommodationDetail = async () => {
		if (accommodationdId !== undefined) {
			setIsLoading(true);
			try {
				const id = +accommodationdId;
				const response = await accommodationAPI.getPlaceDetail(id);
				setAccommodationInfo(response.data.data);
			} catch (error) {
				console.error('Failed to load accommodation details:', error);
			}
			setIsLoading(false);
		}
	};

	const getRoomsInfo = async () => {
		if (accommodationdId !== undefined) {
			try {
				const id = +accommodationdId;
				const checkInDateString = checkInDate.toISOString().split('T')[0];
				const checkOutDateString = checkOutDate.toISOString().split('T')[0];

				const response = await accommodationAPI.getPlaceDetailRooms(
					id,
					checkInDateString,
					checkOutDateString,
					capacityValue,
				);
				setRoomsInfo(response.data.data);
			} catch (error) {
				console.error('Failed to load roomtype information', error);
			}
		}
	};

	useEffect(() => {
		getAccommodationDetail();
		getRoomsInfo();
	}, [accommodationdId]);

	useEffect(() => {
		getRoomsInfo();
	}, [checkInDate, checkOutDate, capacityValue]);

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
				.catch((err) => {
					// This will be executed if the copying failed
					swal('주소 복사에 실패했습니다.', { icon: 'error' });
					console.error('Error copying text: ', err);
				});
		}
	};

	const mapRef = useRef<HTMLDivElement | null>(null); // KakaoMap 컴포넌트에 대한 참조 생성

	const handleAddressClick = () => {
		// KakaoMap 컴포넌트로 스크롤
		mapRef.current?.scrollIntoView({ behavior: 'smooth' });
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<div className="justify-center m-auto text-content text-black">
			<CalendarModal isOpen={isModalOpen} handleOpen={handleCalendarClick} />
			<RegionProdCapacityModal
				isOpen={isCapacityModalOpen}
				handleOpen={handleCapacityClick}
			/>
			<CommonHeader name={accommodationInfo?.name} isHomeIcon isCartIcon />
			{/* <Header name={accommodationInfo?.name} /> */}
			<div className="relative mt-[48px] flex-row">
				<div className="ml-[-1.25rem] mr-[-1.25rem]">
					<ImageSwiper items={accommodationInfo?.images} />
				</div>
				<div className="pt-3">
					<div className="flex w-full justify-between">
						<p className="text-lg font-bold">{accommodationInfo?.name}</p>
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
				<div className="pt-5">
					<div className="min-h-[3rem] flex items-center">
						<p className="text-title font-bold">시실 및 서비스</p>
					</div>
					<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
						{accommodationInfo?.services.map((service, index) => (
							<div key={index} className="flex items-center">
								<CheckIcon />
								<span>{service}</span>
							</div>
						))}
					</div>
				</div>
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
