import React, { Suspense, useCallback, useEffect, useState } from 'react';
import CommonHeader from 'components/common/CommonHeader';
import CategoryRegionModal from 'components/category/CategorySelcRegion';
import { useParams, useSearchParams } from 'react-router-dom';
import RegionProdOptionModal from 'components/region/RegionProdOptionModal';
import RegionProdCapacityModal from 'components/region/RegionProdCapacityModal';
import CalendarModal from 'components/common/CalendarModal';
import RegionInner from 'components/region/RegionInner';
import RegionInnerSkeleton from 'components/region/skeleton/RegionInnerSkeleton';
import CriticalErrorBoundary from 'components/common/CriticalErrorBoundary';
import RetryErrorBoundary from 'components/common/RetryErrorBoundary';
import regionCheckRouter from 'components/region/regionCheckRouter';
import { OrderEnum } from 'recoil/atoms/orderAtom';
import TopBtn from 'components/common/TopBtn';
import useScrollToShow from 'hooks/common/handleScroll';

function Region() {
	const [searchParams, setSearchParams] = useSearchParams();
	const { region } = useParams();
	const [regionOpen, setRegionOpen] = useState(false);
	const [optionOpen, setOptionOpen] = useState(false);
	const [dateOpen, setDateOpen] = useState(false);
	const [capacityOpen, setCapacityOpen] = useState(false);
	const show = useScrollToShow(false, 200);

	const handleRegionOpen = () => {
		setRegionOpen((prev) => !prev);
	};
	const handleOptionOpen = () => {
		setOptionOpen((prev) => !prev);
	};
	const handleDateOpen = () => {
		setDateOpen((prev) => !prev);
	};
	const handleCapacityOpen = () => {
		setCapacityOpen((prev) => !prev);
	};

	const handleChangeParams = useCallback(
		(order: OrderEnum) => {
			const newSearchParams = searchParams;
			newSearchParams.set('order', order);
			setSearchParams(newSearchParams);
		},
		[searchParams],
	);

	useEffect(() => {
		setRegionOpen(false);
		setOptionOpen(false);
	}, [region]);

	return (
		<main className="">
			<CommonHeader type="category" isHomeIcon isCartIcon />
			<CriticalErrorBoundary>
				<RetryErrorBoundary>
					<Suspense
						fallback={
							<RegionInnerSkeleton
								handleRegionOpen={handleRegionOpen}
								handleOptionOpen={handleOptionOpen}
								searchParams={searchParams}
								handleChangeParams={handleChangeParams}
							/>
						}
					>
						<RegionInner
							handleRegionOpen={handleRegionOpen}
							handleOptionOpen={handleOptionOpen}
							searchParams={searchParams}
							handleChangeParams={handleChangeParams}
						/>
					</Suspense>
				</RetryErrorBoundary>
			</CriticalErrorBoundary>
			<CategoryRegionModal isOpen={regionOpen} handleOpen={handleRegionOpen} />
			<RegionProdOptionModal
				isOpen={optionOpen}
				handleOpen={handleOptionOpen}
				handleCapaOpen={handleCapacityOpen}
				handleDateOpen={handleDateOpen}
				searchParams={searchParams}
				setSearchParams={setSearchParams}
			/>
			{dateOpen && (
				<CalendarModal isOpen={dateOpen} handleOpen={handleDateOpen} />
			)}
			<RegionProdCapacityModal
				isOpen={capacityOpen}
				handleOpen={handleCapacityOpen}
			/>
			{show && <TopBtn show={show} />}
		</main>
	);
}

export default regionCheckRouter(Region);
