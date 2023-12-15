import React from 'react';

export default function RoomItemSkeleton() {
	return (
		<div
			role="status"
			className="animate-pulse flex flex-wrap py-5 justify-between border-b border-borderGray cursor-pointer"
		>
			<div className="mb-4">
				<div className="flex items-center justify-center lg:w-[320px] lg:h-[160px] bg-gray rounded dark:bg-gray">
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
				<div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-48 mt-3"></div>
			</div>
			<div className="p-4 w-full lg:w-[386px] h-fit border-borderGray border rounded-lg">
				<div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-24 mt-3"></div>
                <div className="h-3 bg-gray rounded-full dark:bg-gray-700 w-36 mt-1"></div>

				
				<div className="flex flex-col items-end">
					<div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-36 mt-3"></div>

					<div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-40 mt-1"></div>
                    <div className="h-4 bg-gray rounded-full dark:bg-gray-700 w-48 mt-4"></div>

				</div>
				
			</div>
		</div>
	);
}
