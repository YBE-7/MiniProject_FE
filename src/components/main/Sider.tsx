import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemPrefix,
	Typography,
} from '@material-tailwind/react';
import hotel from '../../assets/images/hotelImg.svg';
import resort from '../../assets/images/resortImg.svg';
import pension from '../../assets/images/pensionImg.svg';
import poolVilla from '../../assets/images/poolVillaImg.svg';

import { Logout, Person, Login } from '@mui/icons-material';
import { MainSiderProps } from 'types/MainPage.type';
import SiderRegions from './SiderRegions';
import { checkAccessToken, logout, removeCookie } from 'utils';
import swal from 'sweetalert';

function Sider({ isOpen, handleClose }: MainSiderProps) {
	const navigate = useNavigate();
	const [isAccessToken, setIsAccessToken] = useState(checkAccessToken());

	return (
		<Drawer
			placement="left"
			open={isOpen}
			onClose={handleClose}
			className="pt-2"
		>
			<div className="mb-2 flex items-center justify-between px-2">
				<Typography variant="h5" color="blue-gray" className="pl-4 pt-2">
					카테고리
				</Typography>
				<IconButton variant="text" color="blue-gray" onClick={handleClose}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2}
						stroke="currentColor"
						className="h-5 w-5"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</IconButton>
			</div>
			<List>
				<Link to="/hotel">
					<ListItem>
						<ListItemPrefix>
							<img src={hotel} alt="Hotel" width={20} height={20} />
						</ListItemPrefix>
						호텔
					</ListItem>
				</Link>
				<Link to="/resort">
					<ListItem>
						<ListItemPrefix>
							<img src={resort} alt="Resort" width={20} height={20} />
						</ListItemPrefix>
						리조트
					</ListItem>
				</Link>
				<Link to="/pension">
					<ListItem>
						<ListItemPrefix>
							<img src={pension} alt="Pension" width={20} height={20} />
						</ListItemPrefix>
						펜션
					</ListItem>
				</Link>
				<Link to="/poolvilla">
					<ListItem>
						<ListItemPrefix>
							<img src={poolVilla} alt="PoolVilla" width={20} height={20} />
						</ListItemPrefix>
						풀빌라
					</ListItem>
				</Link>
			</List>
			<div className="mb-2 flex items-center justify-between px-2">
				<Typography variant="h5" color="blue-gray" className="pl-4 pt-2">
					여행지
				</Typography>
			</div>
			<SiderRegions />
			<hr className="border-bgGray mt-5" />
			<List>
				<ListItem
					onClick={() => {
						const res = checkAccessToken();
						if (res === false) {
							removeCookie();
							swal({ title: '로그인이 필요한 서비스입니다.', icon: 'warning' });
							// 로그인 하시겠습니까? -> 확인 -> 로그인 페이지 / 취소 -> 메인페이지
						} else {
							navigate('/mypage');
						}
					}}
				>
					<ListItemPrefix>
						<Person />
					</ListItemPrefix>
					마이페이지
				</ListItem>
				{isAccessToken !== false ? (
					<ListItem
						onClick={() => {
							logout();
							setIsAccessToken(checkAccessToken());
						}}
					>
						<ListItemPrefix>
							<Logout />
						</ListItemPrefix>
						로그아웃
					</ListItem>
				) : (
					<ListItem
						onClick={() => {
							navigate('/login');
						}}
					>
						<ListItemPrefix>
							<Login />
						</ListItemPrefix>
						로그인
					</ListItem>
				)}
			</List>
		</Drawer>
	);
}

export default Sider;
