import { useEffect, useRef } from 'react';
import { PlaceDetailInfo, RoomDetailInfos } from 'types/Place';

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
	interface Window {
		Kakao: any;
	}
	const Kakao: any;
}

function useKakaoShare(
	link: string,
	data: PlaceDetailInfo,
	roomsData: RoomDetailInfos[] | undefined,
) {
	const minPrice = useRef<number>();

	useEffect(() => {
		// init 체크
		if (!Kakao.isInitialized())
			Kakao.init(process.env.REACT_APP_KAKAO_SHARE_API_KEY);
		if (roomsData) {
			const newMinPrice = Math.min(...roomsData.map((obj) => obj.price));
			minPrice.current = newMinPrice;
		}
		return () => {
			Kakao.cleanup();
		};
	}, []);

	const handleKakaoShare = () => {
		Kakao.Share.sendCustom({
			templateId: 101785,
			templateArgs: {
				THU: data.images[0], // 썸네일 주소 ${THUMB}
				THU2: data.images[1], // 썸네일 주소 ${THUMB}
				THU3: data.images[2], // 썸네일 주소 ${THUMB}
				PRICE: minPrice.current,
				TITLE: data.name, // 제목 텍스트 ${TITLE}
				DESC: data.introduction, // 설명 텍스트 ${DESC}
				LINK: link,
			},
		});
	};

	return { handleKakaoShare };
}

export default useKakaoShare;
