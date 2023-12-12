import React from 'react';
import { Image } from '@mui/icons-material';
const MainRegionSkeletonItem = () => {
	return (
		<>
			<div className="animate-pulse">
				<div className="grid grid-cols-2 grid-rows-3 gap-4">
					{new Array(6).fill(0).map((_, index) => (
						<div className="flex h-28 " role="status" key={index}>
							<div className="flex items-center justify-center bg-gray rounded w-1/3 ">
								<Image className="text-lightGray" fontSize="large" />
							</div>
							<div className="pl-5 py-2 flex flex-col justify-between">
								<div className="h-5 bg-gray rounded-full w-32 mb-2"></div>
								<div className="h-5 bg-gray rounded-full w-16 mb-2 self-end "></div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default MainRegionSkeletonItem;
