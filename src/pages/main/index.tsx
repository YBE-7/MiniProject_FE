import React, { useCallback, useState } from 'react';
import Header from '../../components/main/Header';
import GoodsList from '../../components/main/GoodsList';
import Sider from 'components/main/Sider';
import MainFooter from 'components/Footer/MainFooter';
import MainCarousel from 'components/main/MainCarousel';
import MainRegionList from 'components/main/MainRegionList';
import TopBtn from 'components/common/TopBtn';
import useScrollToShow from 'hooks/common/handleScroll';
import BenefitsInfo from 'components/main/BenefitsInfo';
import SiderRegions from 'components/main/SiderRegions';
import TypeAccommodations from 'components/main/TypeAccommodations';
import TopBenefits from 'components/main/TopBenefits';
import useNotiTodayOrder from 'hooks/main/useNotiTodayOrder';

const main = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleDrawerOpen = useCallback(() => {
		setIsOpen(true);
	}, []);

	const handleDrawerClose = useCallback(() => {
		setIsOpen(false);
	}, []);

	const show = useScrollToShow(false, 200);

	// 브라우저 알림창으로 오늘 입실할 에약을 알려주는 기능
	useNotiTodayOrder();

	return (
		<div className={isOpen ? 'h-screen overflow-hidden' : ''}>
			<Header handleOpen={handleDrawerOpen} />
			{/* 타입별 숙소 리다이렉션 */}
			<TypeAccommodations />

			{/* 캐러셀 */}
			<MainCarousel />

			{/* 혜택 광고 */}
			<TopBenefits />

			<div>
				<GoodsList type={'PENSION'} title="야놀자 추천 숙소" />
			</div>

			<div>
				<GoodsList type={'HOTEL'} title="크리스마스 호캉스 예약하기" />
			</div>

			{/* 지역별 숙소 모음 */}
			<MainRegionList />

			<div>
				<GoodsList type={'POOL_VILLA'} title="내가 관심 있을 만한 풀빌라" />
			</div>
			<div>
				<GoodsList type={'RESORT'} title="선선한 가을 추천 리조트" />
			</div>

			<div>
				<div className="font-semibold"> 지금 사랑받는 여행지</div>
				<div className="py-6">
					<SiderRegions isMain />
				</div>
			</div>

			{/* 하단 혜택 광고 */}
			<BenefitsInfo />

			{/* 사이드바 추가 */}
			<Sider isOpen={isOpen} handleClose={handleDrawerClose} />
			{show && <TopBtn show={show} />}

			<MainFooter></MainFooter>
		</div>
	);
};

export default main;
