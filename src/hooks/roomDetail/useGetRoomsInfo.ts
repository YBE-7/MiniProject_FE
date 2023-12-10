import accommodationAPI from 'apis/accommodationAPI';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { capacityState } from 'recoil/atoms/capacityAtom';
import { checkInDateState, checkOutDateState } from 'recoil/atoms/dateAtom';
import { RoomDetailInfos } from 'types/Place';

export default function useGetRoomsInfo(accommodationdId : string | undefined) {

    const [roomsInfo, setRoomsInfo] = useState<RoomDetailInfos[]>();
    const navigate = useNavigate();
    const checkInDate = useRecoilValue<Date>(checkInDateState);
	const checkOutDate = useRecoilValue<Date>(checkOutDateState);
    const capacityValue = useRecoilValue(capacityState);



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
				navigate('/404', { replace: true });
			}
		}
	};

    useEffect(() => {
		getRoomsInfo();
	}, [accommodationdId]);

	useEffect(() => {
		getRoomsInfo();
	}, [checkInDate, checkOutDate, capacityValue]);

  return roomsInfo;
}
