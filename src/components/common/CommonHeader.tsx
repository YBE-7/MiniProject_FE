import React, { useEffect } from 'react';
import {
	HomeOutlined,
	KeyboardArrowLeft,
	ShoppingCartOutlined,
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { categoryToKor, regionToKor } from 'utils/switchNameToKor';
import { getCookie } from 'utils';
import { Link } from 'react-router-dom';
import { RegionHeaderProps } from 'types/Region.type';
import styles from './Common.module.css';
import { getCartCount } from 'hooks/common/useQueryCartCount';
import { Badge } from '@material-tailwind/react';
import { useRecoilState } from 'recoil';
import { cartCountState } from 'recoil/atoms/cartAtom';

function CommonHeader({
	type,
	name,
	isHomeIcon = false,
	isBackIcon = true,
	isCartIcon = false,
}: RegionHeaderProps) {
	const navigate = useNavigate();
	const [cartCount, setCartCount] = useRecoilState(cartCountState);
	const { category, region } = useParams();
	// const { data: cartCount } = useQueryCartCount();

	const handleArrowBackClick = () => {
		navigate(-1);
	};

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

	return (
		<nav className={styles.nav}>
			<div className={styles.wrap}>
				<div className={styles.leftWrap}>
					{isBackIcon && (
						<div className="w-8" onClick={handleArrowBackClick}>
							<KeyboardArrowLeft sx={{ fontSize: '2rem' }} />
						</div>
					)}
				</div>
				<h2 className="text-content lg:text-title font-semibold">
					{name}
					{type === 'category' && categoryToKor(category ?? '')}
					{type === 'region' && regionToKor(region ?? '')}
				</h2>
				<div className={styles.rightWrap}>
					<div className="flex justify-end">
						{isHomeIcon && (
							<div className="w-8">
								<Link to="/">
									<HomeOutlined />
								</Link>
							</div>
						)}
						{isCartIcon && (
							<div className="w-8">
								<Link to="/cart">
									{cartCount && cartCount > 0 ? (
										<Badge
											content={cartCount}
											className="bg-primary p-0 w-4 min-w-0 h-4 min-h-0"
										>
											<ShoppingCartOutlined />
										</Badge>
									) : (
										<ShoppingCartOutlined />
									)}
								</Link>
							</div>
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default CommonHeader;
