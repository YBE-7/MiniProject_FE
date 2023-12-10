import CommonHeader from 'components/common/CommonHeader';
import React from 'react';
import RoomItemSkeleton from './RoomItemSkeleton';

export default function PlaceDatilSkeleton() {
	return (
		<div>
			<CommonHeader name={' '} isHomeIcon isCartIcon />
			<div role="status" className="animate-pulse w-full mt-[48px] ">
				<div className="flex items-center justify-center max-w-none  mt-[48px] h-[507px] bg-gray rounded dark:bg-gray ml-[-1.25rem] mr-[-1.25rem]">
					<svg
						className="w-10 h-10 text-bgGray dark:text-gray-600"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="currentColor"
						viewBox="0 0 20 18"
					>
						<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
					</svg>
				</div>
				<div className="w-full ">
					<div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-48 mt-3"></div>
					<div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-[300px] mt-1.5"></div>
                    <div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-[50px] mt-1.5"></div>
                    <div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-48 mt-5"></div>
                    <RoomItemSkeleton />
                    <RoomItemSkeleton />
                    <RoomItemSkeleton />

				</div>
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
