import React from 'react';
import mainIcon1 from '../../assets/images/mainIcon1.svg';
import mainIcon2 from '../../assets/images/mainIcon2.svg';
import mainIcon3 from '../../assets/images/mainIcon3.svg';
import mainIcon4 from '../../assets/images/mainIcon4.svg';

const TopBenefits = () => {
	return (
		<div className="flex text-xxsm max-w-xl lg:max-w-none mx-auto lg:px-20 py-5 mb-4 justify-between items-center">
			<a
				href="https://www.yanolja.com/raffle-deal/YADRAW"
				rel="noreferrer"
				target="_blank"
			>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={mainIcon1} alt="mainIcon1" width={30} />
					<span> 매일응모하기</span>
				</div>
			</a>
			<a
				href="https://board.yanolja.com/event/398/index.html"
				rel="noreferrer"
				target="_blank"
			>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={mainIcon2} alt="mainIcon2" width={30} />
					<span> 숙박권받기</span>
				</div>
			</a>
			<a
				href="https://board.yanolja.com/event/291/index.html"
				rel="noreferrer"
				target="_blank"
			>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={mainIcon3} alt="mainIcon3" width={30} />
					<span> 최대8만혜택</span>
				</div>
			</a>
			<a
				href="https://board.yanolja.com/event/4/index.html"
				rel="noreferrer"
				target="_blank"
			>
				<div className="flex flex-col items-center justify-center font-semibold">
					<img src={mainIcon4} alt="mainIcon4" width={30} />
					<span> 결제할인모음</span>
				</div>
			</a>
		</div>
	);
};

export default TopBenefits;
