import React from 'react';
import BottomInfo from 'components/cart/BottomInfo';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
	const navigate = useNavigate();

	return (
		<div className="bg-white h-[40%] lg:max-w-[768px] m-auto top-0 left-0 py-5 px-5">
			<div className=" flex flex-col justify-center items-center py-4 m-auto left-0 t-10">
				<ShoppingCartOutlined sx={{ fill: '#e7e7e7', fontSize: '90px' }} />
				<div className="mt-3">
					<div>장바구니에 담긴 상품이 없습니다. </div>
					<div>원하는 상품을 담아보세요</div>
				</div>
				<div
					className="p-3 border mb-8 mt-3 border-blue rounded-md cursor-pointer text-blue text-content pl-10 pr-10"
					onClick={() => {
						navigate('/');
					}}
				>
					홈으로 가기
				</div>
				<BottomInfo />
			</div>
		</div>
	);
};

export default EmptyCart;
