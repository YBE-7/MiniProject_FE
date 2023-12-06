import React from 'react';
import carImage from '../../assets/images/cart-img.png';

const ResultFooter = () => {
	return (
		<>
			{' '}
			<div className="bg-white h-[110px] shadow-inner w-screen fixed bottom-0 left-0">
				<div className="w-full lg:max-w-[768px] m-auto top-0 left-0 p-3 lg:p-0">
					<div className="mt-4">
						<img src={carImage} className="rounded-md mb-2" />
					</div>

					<div className="text-textGray text-xxsm mt-2">
						(주)야놀자는 통신판매중개업자로서, 통신판매의 당사자가 아니라는
						사실을 고지하며 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은
						각 판매자에게 있습니다.
					</div>
				</div>
			</div>
		</>
	);
};

export default ResultFooter;
