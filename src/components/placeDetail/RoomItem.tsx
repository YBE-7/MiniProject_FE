import React, { useEffect, useState } from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RoomImageSwiper from 'components/common/RoomImageSwiper';
import { RoomProps } from 'types/Place';
import { useNavigate, useParams } from 'react-router';
import { formatNumberWithCommas } from 'utils/numberComma';
import cartAPI from 'apis/cartAPI';
import { useRecoilState, useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { getCookie } from 'utils';
import swal from 'sweetalert';
import { orderItemState } from 'recoil/atoms/orderAtom';
import { formatDateWithoutYear } from 'utils/formatDate';

export default function RoomItem({ roomItem, name }: RoomProps) {
	const navigate = useNavigate();
	const { accommodationdId } = useParams();
	const checkInDate = useRecoilValue(checkInDateState);
	const checkOutDate = useRecoilValue(checkOutDateState);
	const [, setOrderItem] = useRecoilState(orderItemState);
	const [freeCancle, setFreeCancle] = useState(false);

	const handleItemClick = () => {
		if (name !== undefined) {
			navigate(
				`/places/${accommodationdId}/${roomItem.id}?name=${name}&status=${roomItem.status}&price=${roomItem.price}`,
			);
		}
	};

	const formattedPrice = formatNumberWithCommas(roomItem.price);

	const saveRoomtoCart = async () => {
		try {
			const checkInDateString = checkInDate.toISOString().split('T')[0];
			const checkOutDateString = checkOutDate.toISOString().split('T')[0];
			const response = await cartAPI.postRoomToCart(
				roomItem.id,
				checkInDateString,
				checkOutDateString,
			);
			if (response.status === 201) {
				swal({ title: '장바구니 담기에 성공하였습니다.', icon: 'success' });
			}
		} catch (error) {
			swal({
				title: '실패',
				text: '장바구니에 담을 수 있는 개수를 초과하였습니다.',
				icon: 'error',
			});
		}
	};

	const handleCartBtnClick = () => {
		const accessToken = getCookie('accessToken');

		if (!accessToken) {
			swal({ title: '로그인이 필요한 서비스입니다.', icon: 'warning' });
			navigate('/login');
		} else saveRoomtoCart();
	};

	const handleOrderBtnClick = () => {
		const accessToken = getCookie('accessToken');

		if (!accessToken) {
			swal({ title: '로그인이 필요한 서비스입니다.', icon: 'warning' });
			navigate('/login');
		} else {
			console.log(roomItem);

			if (roomItem !== undefined && name !== undefined) {
				setOrderItem({
					accommodationName: name,
					roomTypeName: roomItem.name,
					price: roomItem.price,
					capacity: roomItem.capacity,
					id: roomItem.id,
				});
				navigate('/orders');
			}
		}
	};

	const isFreeCancle = () => {
		const date = new Date(checkInDate);
		const today = new Date();
		return (
			date.getFullYear() !== today.getFullYear() ||
			date.getMonth() !== today.getMonth() ||
			date.getDate() !== today.getDate()
		);
	};

	const getDayBeforCheckIn = () => {
		const date = new Date(checkInDate);
		date.setDate(date.getDate() - 1);

		return date;
	};

	useEffect(() => {
		setFreeCancle(isFreeCancle());
	}, [checkInDate]);

	const cancleDate = formatDateWithoutYear(getDayBeforCheckIn());

	return (
		<div className="flex flex-wrap py-5 justify-between border-b border-borderGray cursor-pointer">
			<div className="mb-4">
				<div className="w-full lg:w-[320px] lg:h-[160px] rounded-lg">
					<RoomImageSwiper items={roomItem.images} />
				</div>
				<p className="text-title text-black font-bold mt-3">{roomItem.name}</p>
				<span></span>
				<div className="flex gap-x-0.5 text-secondaryTextGray mt-2">
					<PersonOutlineIcon fontSize="small" />
					<p>기준2인 / 최대 {roomItem.capacity}인</p>
				</div>
			</div>
			<div className="p-4 w-full lg:w-[386px] h-fit border-borderGray border rounded-lg">
				<div className="flex text-sm justify-between ">
					<span className="text-black font-semibold">숙박</span>
					<div className="flex items-center" onClick={handleItemClick}>
						<span className="text-blue font-bold ml-2">상세보기</span>
						<KeyboardArrowRightIcon
							sx={{ fill: '#0152cc', fontSize: '16px' }}
						/>
					</div>
				</div>
				<div>
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

					{roomItem.status === 'OK' ? (
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
					) : (
						<div className="flex items-center">
							<p className="text-secondaryTextGray text-sm font-bold ml-3">
								무료취소 (12.04 (월) 17:00전까지)
							</p>
							<KeyboardArrowRightIcon
								sx={{ fill: '#616161', fontSize: '16px' }}
							/>
						</div>
					)}
				</div>
				{roomItem.status === 'OK' ? (
					<div className="flex justify-between mt-3 items-center">
						<span className="text-orange text-sm font-bold">
							남은객실 {roomItem.stock}개
						</span>
						<div className="flex gap-x-2">
							<button className="border border-borderGray rounded w-[32px] h-[32px] cursor-pointer">
								<ShoppingCartOutlinedIcon
									fontSize="small"
									onClick={handleCartBtnClick}
								/>
							</button>
							<button
								onClick={handleOrderBtnClick}
								className="bg-secondary text-white rounded text-sm w-[120px] py-2 cursor-pointer hover:bg-hoverSecondary"
							>
								예약하기
							</button>
						</div>
					</div>
				) : (
					<div className="flex flex-col items-end mt-3">
						<button className="bg-soldOut text-white w-[120px] rounded text-sm py-2">
							최대 인원 초과
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
