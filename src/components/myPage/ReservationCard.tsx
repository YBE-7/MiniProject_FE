import React from 'react';
import { getDayOfWeek } from 'hooks/common/getDayOfWeek';
import { getDateDifference } from 'hooks/common/getDateDifference';
import { useNavigate } from 'react-router';
import { reservationCardProps } from 'types/ReservationCard.type';
const ReservationCard = ({
	code,
	checkinDate,
	checkoutDate,
	accomodationId,
	accomodationImage,
	isUsed,
	accomodationName,
	roomName,
	capacity,
}: reservationCardProps) => {
	const checkinDayOfWeek = getDayOfWeek(checkinDate);
	const checkoutDayOfWeek = getDayOfWeek(checkoutDate);
	const differenceInDays = getDateDifference(checkinDate, checkoutDate);
	const navigate = useNavigate();
	return (
		<div
			className="cursor-pointer py-4"
			onClick={() => navigate(`/places/${accomodationId}`)}
		>
			<div className="pl-4 pb-1 text-textGray text-content">
				숙소 예약번호: {code}
			</div>
			<div></div>
			<div className="pl-4 pt-3 pb-1 flex">
				<img
					className="h-[80px] w-[80px] rounded-md"
					src={accomodationImage}
				></img>
				<div>
					<div className="pl-4">
						{isUsed && (
							<div className="w-16 text-center p-1 border border-gray bg-gray text-white rounded-sm text-sm">
								이용완료
							</div>
						)}
						{!isUsed && (
							<div className="w-16 text-center p-1 border border-green bg-white text-green rounded-sm text-sm">
								예약확정
							</div>
						)}

						<div className="text-title pt-0.5 pb-0.5">{accomodationName}</div>
						<div className="text-content pt-0.5 pb-0.5">{roomName}</div>
						<div className="text-content pt-0.5 pb-0.5">
							{checkinDate}({checkinDayOfWeek}) ~ {checkoutDate}(
							{checkoutDayOfWeek}) | {differenceInDays}박
						</div>
						<div className="text-content text-textGray pt-0.5 pb-0.5">
							체크인 15:00 | 체크아웃 11:00
						</div>
						<div className="text-content text-textGray pt-0.5 pb-0.5">
							기준 2명 / 최대 {capacity}명
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ReservationCard;
