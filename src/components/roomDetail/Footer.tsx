import React, { useEffect, useState } from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useRecoilState, useRecoilValue } from 'recoil';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { footerFormatFullDateRange } from 'utils/formatDate';
import { getCookie } from 'utils';
import swal from 'sweetalert';
import cartAPI from 'apis/cartAPI';
import { RoomDetailInfo } from 'types/Place';
import { useNavigate } from 'react-router-dom';
import { orderItemState } from 'recoil/atoms/orderAtom';

interface FooterProps {
	formattedPrice: string;
	roomInfo: RoomDetailInfo | undefined;
	status : string | null;
	name : string | null;
}

export default function Footer({ formattedPrice, roomInfo, status, name }: FooterProps) {
	const checkInDate = useRecoilValue<Date>(checkInDateState);
	const checkOutDate = useRecoilValue<Date>(checkOutDateState);

	const formattingDate = footerFormatFullDateRange(checkInDate, checkOutDate);
	const [freeCancle, setFreeCancle] = useState(false);

	const navigate = useNavigate();
	const [, setOrderItem] = useRecoilState(orderItemState);


	const isFreeCancle = () => {
		const date = new Date(checkInDate);
		const today = new Date();
		return (
			date.getFullYear() !== today.getFullYear() ||
			date.getMonth() !== today.getMonth() ||
			date.getDate() !== today.getDate()
		);
	};

	const saveRoomtoCart = async () => {
		try {
			const checkInDateString = checkInDate.toISOString().split('T')[0];
			const checkOutDateString = checkOutDate.toISOString().split('T')[0];

			if(roomInfo !== undefined) {
				const response = await cartAPI.postRoomToCart(
					roomInfo.id,
					checkInDateString,
					checkOutDateString,
				);
				if (response.status === 201) {
					swal({ title: '장바구니 담기에 성공하였습니다.', icon: 'success' });
				} else {
					swal({ title: '장바구니 담기에 실패하였습니다 .', icon: 'error' });
				}

			}
			
		} catch (error) {
			console.error('Failed to load accommodation details:', error);
		}
	};


	useEffect(() => {
		setFreeCancle(isFreeCancle());
	}, [checkInDate]);

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

			if (roomInfo !== undefined && name !== null) {
				setOrderItem({
					accommodationName: name,
					roomTypeName: roomInfo.name,
					price: roomInfo.price,
					capacity: roomInfo.capacity,
					id: roomInfo.id,
				});
				navigate('/orders');
			}
		}
	};

	return (
		<div className="fixed h-[68px] bottom-0 left-1/2 transform translate-x-[-50%] bg-white w-[768px] px-5 py-3 shadow-xl ">
			<div className="flex justify-between items-center w-mx-auto bg-white">
				<div className="flex flex-col">
					<div className="flex">
						<p className="text-sm font-bold">{formattingDate}</p>
						<p className="text-green text-sm font-bold ml-3">
							{freeCancle ? `무료취소` : `취소 및 환불 불가`}
						</p>
					</div>
					<div>
						<p className="text-title font-bold text-black">
							{formattedPrice}원
						</p>
					</div>
				</div>
				<div className="flex gap-x-2">
					<button className="border border-borderGray rounded w-[44px] h-[44px] cursor-pointer">
						<ShoppingCartOutlinedIcon fontSize="small" onClick={handleCartBtnClick}/>
					</button>
					{status !== undefined && status === 'OK' ? (
						<button onClick={handleOrderBtnClick} className="bg-secondary w-[364px] h-[44px] text-white rounded text-[16px] font-bold cursor-pointer hover:bg-hoverSecondary">
							예약하기
						</button>
					) : (
						<button className="bg-soldOut w-[364px] h-[44px] text-white rounded text-[16px] font-bold cursor-pointer">
							예약불가
						</button>
					)}
				</div>
			</div>
		</div>
	);
}
