import React from 'react';
import { orderItemState } from 'recoil/atoms/orderAtom';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { useRecoilValue } from 'recoil';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import { formatNumberWithCommas } from 'utils/numberComma';

// 상세 페이지 -> 결제하기
const orderItem = useRecoilValue(orderItemState);
const checkInDate = useRecoilValue(checkInDateState);
const checkOutDate = useRecoilValue(checkOutDateState);

const DetailOrderItem = () => {
	return (
		<>
			{orderItem?.id && (
				<div key={orderItem.id}>
					<div className="my-4">
						<div className="font-semibold ">{orderItem.accommodationName}</div>
						<div className="font-semibold text-content ">
							{orderItem.roomTypeName}
						</div>
					</div>
					<div className="flex ">
						<div className="flex flex-col w-1/2">
							<div className="text-xxsm text-textGray">체크인</div>
							<div className="font-semibold text-content ">
								<>{checkInDate}(화)</>
							</div>
							<div className="text-sm">15: 00</div>
						</div>
						<div className="flex flex-col w-1/2 ">
							<div className="text-xxsm text-textGray">체크아웃</div>
							<div className="font-semibold text-content ">
								<>{checkOutDate} (금)</>
							</div>
							<div className="text-sm">19: 00</div>
						</div>
					</div>
					<div className="text-xxsm text-textGray flex items-center py-2">
						<PersonOutlineRoundedIcon sx={{ fontSize: '1rem' }} /> 기준 2명 /
						최대
						{orderItem.capacity}명
					</div>
					<div>
						<div className="flex justify-end items-center content-center">
							<div className="text-sm text-textGray pr-1">연박 / 3박</div>
							<div className="font-semibold text-content">
								{formatNumberWithCommas(orderItem.price)} 원
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default DetailOrderItem;
