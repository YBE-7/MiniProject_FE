import { ArrowBackIos } from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import React from 'react';
import { useNavigate } from 'react-router';

export default function Header() {
	const navigate = useNavigate();

	const handleBackBtnClick = () => {
		navigate(-1);
	};

	const handleHomeBtnClick = () => {
		navigate('/');
	};

	const handleCartBtnClick = () => {
		navigate('/cart');
	};
	return (
		<div className="fixed top-0 left-0 w-full h-[48px] my-auto z-20 shadow-md bg-white ">
			<div className="lg:max-w-[768px] flex justify-between h-[48px] m-auto items-center z-10 px-5 ">
				<ArrowBackIos
					className="flex m-2 cursor-pointer"
					onClick={handleBackBtnClick}
				/>
				<span className="flex text-title font-bold ">객실상세</span>
				<div className="flex">
					<div className="w-8 mr-1 cursor-pointer">
						<HomeOutlinedIcon onClick={handleHomeBtnClick} />
					</div>
					<div className="w-8 cursor-pointer">
						<ShoppingCartOutlinedIcon onClick={handleCartBtnClick} />
					</div>
				</div>
			</div>
		</div>
	);
}
