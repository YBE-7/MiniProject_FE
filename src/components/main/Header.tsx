import React, { useEffect } from 'react';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';
import { MainHeaderProps } from 'types/MainPage.type';
import { getCartCount } from 'hooks/common/useQueryCartCount';
import { Badge } from '@material-tailwind/react';
import { getCookie } from 'utils';
import Swal from 'sweetalert2';
import { useRecoilState } from 'recoil';
import { cartCountState } from 'recoil/atoms/cartAtom';

const Header = ({ handleOpen }: MainHeaderProps) => {
	const accessToken = getCookie('accessToken');
	const navigate = useNavigate();
	const [cartCount, setCartCount] = useRecoilState(cartCountState);

	useEffect(() => {
		const accessToken = getCookie('accessToken');
		if (accessToken) {
			(async () => {
				const count = await getCartCount();
				setCartCount(count);
			})();
		} else {
			setCartCount(0);
		}
	}, []);

	const handelBtnClick = () => {
		if (!accessToken) {
			Swal.fire({
				title: '로그인이 필요한 서비스입니다.',
				text: '로그인 창으로 이동하시겠습니까 ?',
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: '확인',
				cancelButtonText: '취소', // 취소 버튼 텍스트 추가
			}).then((result: { isConfirmed: boolean }) => {
				if (result.isConfirmed) {
					navigate('/login');
				}
			});
		} else {
			navigate('/cart');
		}
	};

	const handleInputBtn = () => {
		navigate('/search');
	};
	return (
		<div className="bg-white fixed left-0 top-0 w-full drop-shadow-sm z-10">
			<div className="h-[56px] max-w-3xl px-4 m-auto top-0 left-0 flex justify-between items-center">
				<div className="cursor-pointer" onClick={handleOpen}>
					<DehazeOutlinedIcon fontSize="small" />
				</div>
				<div onClick={handleInputBtn} className="w-full px-4 lg:px-6">
					<div className="border-solid border-[1px] px-4 border-gray rounded-full flex justify-between items-center cursor-pointer">
						<span className=" text-textGray text-sm py-1.5">
							무엇을 하고 놀까요 ?
						</span>

						<SearchOutlinedIcon fontSize="small" />
					</div>
				</div>
				{cartCount && cartCount > 0 ? (
					<Badge
						content={cartCount}
						className="bg-primary p-0 w-4 min-w-0 h-4 min-h-0"
					>
						<ShoppingCartOutlinedIcon
							fontSize="small"
							onClick={handelBtnClick}
							className="cursor-pointer"
						/>
					</Badge>
				) : (
					<div className="cursor-pointer">
						<ShoppingCartOutlinedIcon
							fontSize="small"
							onClick={handelBtnClick}
							className="cursor-pointer"
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Header;
