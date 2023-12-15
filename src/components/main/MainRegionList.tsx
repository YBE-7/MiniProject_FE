import React, { useState, useEffect } from 'react';
import { useQueryMainRegion } from 'hooks/main/useQueryMainRegion';
import MainRegionItem from './MainRegionItem';
import MainRegionSkeletonItem from './MainRegionSkeletonItem';

export type Accommodation = {
	id: string;
	image: string;
	name: string;
	price: number;
	star: string;
	index: string;
};

const MainRegionList = () => {
	const [selectedLocation, setSelectedLocation] = useState<string>('SEOUL');
	const [accommodations, setAccommodations] = useState<Accommodation[]>([]);
	const { data, isLoading } = useQueryMainRegion(selectedLocation);
	const [btnActive, setBtnActive] = useState('');

	const handleLocationClick = (location: string) => {
		setSelectedLocation(location);
		setBtnActive(location);
	};

	useEffect(() => {
		if (data?.data?.accommodations) {
			setAccommodations(data.data.accommodations);
		}
	}, [data]);

	const region = [
		{ region: '서울', data: 'SEOUL' },
		{ region: '부산', data: 'BUSAN' },
		{ region: '인천', data: 'INCHEON' },
		{ region: '경상', data: 'GYEONGSANG' },
		{ region: '충청', data: 'CHUNGCHEONG' },
	];

	return (
		<>
			<div className="font-semibold text-title"> 겨울엔 이 숙소 </div>
			<div className="my-2 ">
				{region.map((item, idx) => (
					<button
						className={`rounded-full py-1 px-2 w-14 lg:w-20 mr-2 hover:bg-bgGray text-sm lg:text-[16px] ${
							btnActive === item.data
								? 'bg-hoverBg text-blue font-semibold'
								: 'bg-white text-black border-2 border-bgGray '
						}`}
						onClick={() => handleLocationClick(`${item.data}`)}
						key={idx}
					>
						{item.region}
					</button>
				))}
			</div>
			{isLoading ? (
				<MainRegionSkeletonItem />
			) : (
				<MainRegionItem accommodations={accommodations} />
			)}
		</>
	);
};

export default MainRegionList;
