import React, { useState } from 'react';
import { Button, Menu, MenuHandler, MenuList } from '@material-tailwind/react';
import { ArrowDropDown } from '@mui/icons-material';
import logo from '../../assets/images/yanolja_gray.svg';
import facebook from '../../assets/images/facebook.svg';
import facebookHover from '../../assets/images/facebookHover.svg';
import instagram from '../../assets/images/instagram.svg';
import instagramHover from '../../assets/images/instagramHover.png';
import naverblog from '../../assets/images/naverblog.svg';
import naverblogHover from '../../assets/images/naverblogHover.svg';
import naverpost from '../../assets/images/naverpost.svg';
import naverpostHover from '../../assets/images/naverpostHover.svg';
import youtube from '../../assets/images/youtube.svg';
import youtubeHover from '../../assets/images/youtubeHover.svg';
import award07 from '../../assets/images/award-07.svg';
import award08 from '../../assets/images/award-08.svg';
import award09 from '../../assets/images/award-09.svg';
import award10 from '../../assets/images/award-10.svg';
import award11 from '../../assets/images/award-11.svg';
import award12 from '../../assets/images/award-12.png';
import award13 from '../../assets/images/award-13.svg';
import styles from '../common/Common.module.css';

const MainFooter = () => {
	const [openMenu, setOpenMenu] = useState(false);
	const [hovered, setHovered] = useState({
		instagram: false,
		youtube: false,
		facebook: false,
		naverblog: false,
		naverpost: false,
	});
	const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement>) => {
		(e.target as HTMLAnchorElement).style.borderColor = 'black';
	};

	const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement>) => {
		(e.target as HTMLAnchorElement).style.borderColor = '#ccc';
	};

	const handleImageOver = (key: string) => {
		setHovered((prevHovered) => ({ ...prevHovered, [key]: true }));
	};

	const handleImageOut = (key: string) => {
		setHovered((prevHovered) => ({ ...prevHovered, [key]: false }));
	};

	return (
		<div className="bg-bgGray pt-[20px] pb-8 text-xs -m-5 px-4">
			<div className="flex justify-between items-center">
				<img src={logo} alt="logo" style={{ width: '77px', height: '22px' }} />
				<Menu open={openMenu} handler={setOpenMenu}>
					<MenuHandler>
						<Button
							style={{ width: '220px', borderRadius: '0', height: '34px' }}
							variant="text"
							className="bg-white"
						>
							<div className="flex justify-between items-center mt-[-6px]">
								<div className="text-sm text-textGray">패밀리 사이트</div>
								<ArrowDropDown
									strokeWidth={2.5}
									className={`h-3.5 w-3.5 transition-transform ${
										openMenu ? 'rotate-180' : ''
									} text-textGray`}
								/>
							</div>
						</Button>
					</MenuHandler>
					<MenuList>
						<div
							style={{
								display: 'flex',
								width: '200px',
								height: '34px',
								alignItems: 'center',
							}}
						>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://business.yanolja.com/web/kr/index"
								className="text-left"
							>
								비즈니스 사이트
							</a>
						</div>
						<div
							style={{
								display: 'flex',
								width: '200px',
								height: '34px',
								alignItems: 'center',
							}}
						>
							<a
								href="https://partner.yanolja.com/intro"
								rel="noreferrer"
								target="_blank"
								className="text-left"
							>
								파트너센터
							</a>
						</div>
						<div
							style={{
								display: 'flex',
								width: '200px',
								height: '34px',
								alignItems: 'center',
							}}
						>
							<a
								href="https://www.hotelup.com/"
								rel="noreferrer"
								target="_blank"
								className="text-left"
							>
								호텔업
							</a>
						</div>
						<div
							style={{
								display: 'flex',
								width: '200px',
								height: '34px',
								alignItems: 'center',
							}}
						>
							<a
								href="https://ad.yanolja.com/intro"
								rel="noreferrer"
								target="_blank"
								className="text-left"
							>
								야놀자 광고센터
							</a>
						</div>
						<div
							style={{
								display: 'flex',
								width: '200px',
								height: '34px',
								alignItems: 'center',
							}}
						>
							<a
								href="https://home.nowwaiting.co/"
								rel="noreferrer"
								target="_blank"
								className="text-left"
							>
								나우웨이팅
							</a>
						</div>
						<div
							style={{
								display: 'flex',
								width: '200px',
								height: '34px',
								alignItems: 'center',
							}}
						>
							<a
								rel="noreferrer"
								target="_blank"
								href="https://www.dodopoint.com/"
								className="text-left"
							>
								도도포인트
							</a>
						</div>
					</MenuList>
				</Menu>
			</div>

			<div className="pt-[20px] text-textGray">
				<p className="pt-1">
					(주)야놀자 | 대표이사 : 이수진, 김종윤, 배보찬 | 사업자 등록번호 :
					220-87-42885 | 통신판매업신고 : 강남-14211호 | 메일 : help@yanolja.com
				</p>
				<p className="pt-1">
					관광사업자 등록번호 : 제2016-31호 | 주소 : 서울특별시 강남구
					테헤란로108길 42 | 호스팅서비스 제공자 : 주식회사 야놀자
				</p>
				<p className="pt-1">고객센터 : 1644-1346 (오전 9시 - 익일 새벽 3시)</p>
			</div>
			<ul className={styles.footLinks}>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://www.yanolja.in/"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						회사소개
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://ad.yanolja.com/intro"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						광고제휴문의
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://careers.yanolja.co/"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						인재채용
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer font-bold"
						rel="noreferrer"
						target="_blank"
						href="https://careers.yanolja.co/"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						개인정보처리방침
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://policy.yanolja.com/policy/?t=youth"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						청소년 보호 정책
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://m.policy.yanolja.com/pf/policy/service?t=service&d=m"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						서비스 이용 약관
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://m.policy.yanolja.com/policy/?t=location&d=m"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						위치정보이용약관
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://www.ftc.go.kr/bizCommPop.do?wrkr_no=2208742885&apv_perm_no="
						style={{
							border: '1px solid #ccc',
							padding: 3,
							marginRight: 5,
						}}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						사업자 정보확인
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://policy.yanolja.com/policy/?t=terms-eft"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						전자금융거래 이용약관
					</a>
				</li>
				<li>
					<a
						className="pt-1 cursor-pointer"
						rel="noreferrer"
						target="_blank"
						href="https://policy.yanolja.com/policy/?t=notes-eft"
						style={{ border: '1px solid #ccc', padding: 3, marginRight: 5 }}
						onMouseOver={handleMouseOver}
						onMouseOut={handleMouseOut}
					>
						전자금융거래 이용자 유의사항
					</a>
				</li>
			</ul>
			<ul className="line-height-10 mt-3 mb-3">
				<div className="flex">
					<li style={{ paddingRight: '20px' }}>
						<a
							className="pt-1 cursor-pointer"
							rel="noreferrer"
							target="_blank"
							href="https://www.instagram.com/yanolja.official/"
							onMouseOver={() => handleImageOver('instagram')}
							onMouseOut={() => handleImageOut('instagram')}
						>
							<img
								src={hovered.instagram ? instagramHover : instagram}
								alt="instagram"
							/>
						</a>
					</li>
					<li style={{ paddingRight: '20px' }}>
						<a
							className="pt-1 cursor-pointer"
							rel="noreferrer"
							target="_blank"
							href="https://www.youtube.com/user/yanoljamedia"
							onMouseOver={() => handleImageOver('youtube')}
							onMouseOut={() => handleImageOut('youtube')}
						>
							<img
								src={hovered.youtube ? youtubeHover : youtube}
								alt="youtube"
							/>
						</a>
					</li>
					<li style={{ paddingRight: '20px' }}>
						<a
							className="pt-1 cursor-pointer"
							rel="noreferrer"
							target="_blank"
							href="https://www.facebook.com/yanolja/?fref=ts"
							onMouseOver={() => handleImageOver('facebook')}
							onMouseOut={() => handleImageOut('facebook')}
						>
							<img
								src={hovered.facebook ? facebookHover : facebook}
								alt="facebook"
							/>
						</a>
					</li>
					<li style={{ paddingRight: '20px' }}>
						<a
							className="pt-1 cursor-pointer"
							rel="noreferrer"
							target="_blank"
							href="https://blog.naver.com/yanolog"
							onMouseOver={() => handleImageOver('naverblog')}
							onMouseOut={() => handleImageOut('naverblog')}
						>
							<img
								src={hovered.naverblog ? naverblogHover : naverblog}
								alt="naverblog"
							/>
						</a>
					</li>
					<li style={{ paddingRight: '20px' }}>
						<a
							className="pt-1 cursor-pointer"
							rel="noreferrer"
							target="_blank"
							href="https://post.naver.com/my.nhn?memberNo=2768780"
							onMouseOver={() => handleImageOver('naverpost')}
							onMouseOut={() => handleImageOut('naverpost')}
						>
							<img
								src={hovered.naverpost ? naverpostHover : naverpost}
								alt="naverpost"
							/>
						</a>
					</li>
				</div>
			</ul>
			<div className="text-textGray">
				<p className="pt-1">
					(주) 야놀자는 통신판매 중개자로서 통신판매의 당사자가 아니며 상품의
					예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.
				</p>
				<p className="pt-2">
					(주)야놀자가 소유/운영/관리하는 웹사이트 및 앱 내의 상품/판매자/이벤트
					정보, 디자인 및 화면의 구성, UI를 포함하여 일체의 콘텐츠에 대한 무단
					복제, 배포, 방송 또는 전송, 스크래핑 등의 행위는 저작권법 및
					콘텐츠산업 진흥법 등 관련 법령에 의하여 엄격히 금지 됩니다.
				</p>
			</div>
			<div className="mt-3 pb-8" style={{ borderBottom: '1px solid #ccc' }}>
				<a
					className="pt-1 cursor-pointer text-textGray"
					rel="noreferrer"
					target="_blank"
					href="https://www.yanolja.com/popup/contents-law"
					style={{
						border: '1px solid #ccc',
						padding: 3,
					}}
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					콘텐츠산업 진흥업에 따른 표시
				</a>
			</div>
			<ul className="line-height-10 mt-3 mb-20 flex flex-wrap justify-between text-center">
				<li>
					<img
						src={award07}
						alt="award07"
						style={{ width: '36px', height: '36px', margin: '0 auto' }}
					/>
					<p className="text-textGray pt-2">
						정보보호 및 개인정보보호 <br />
						관리체계 인증 ISMS-P
					</p>
				</li>
				<li>
					<img
						src={award08}
						alt="award08"
						style={{ width: '36px', height: '36px', margin: '0 auto' }}
					/>
					<p className="text-textGray pt-2">
						공정거래위원회 인증 <br />
						소비자중심경영(CCM)
					</p>
				</li>
				<li>
					<img
						src={award09}
						alt="award09"
						style={{ width: '36px', height: '36px', margin: '0 auto' }}
					/>
					<p className="text-textGray pt-2">
						2017하이서울 <br />
						브랜드 선정
					</p>
				</li>
				<li>
					<img
						src={award10}
						alt="award10"
						style={{ width: '36px', height: '36px', margin: '0 auto' }}
					/>
					<p className="text-textGray pt-2">
						2017브랜드스타 <br />
						숙박앱 부문1위
					</p>
				</li>
				<li>
					<img
						src={award11}
						alt="award11"
						style={{ width: '36px', height: '36px', margin: '0 auto' }}
					/>
					<p className="text-textGray pt-2">
						2016모바일어워드코리아
						<br />
						숙박정보부문 대상
					</p>
				</li>
				<li>
					<img
						src={award12}
						alt="award12"
						style={{ width: '36px', height: '36px', margin: '0 auto' }}
					/>
					<p className="text-textGray pt-2">
						2015앱어워드코리아
						<br />
						숙박정보부문 대상
					</p>
				</li>
				<li>
					<img
						src={award13}
						alt="award13"
						style={{
							width: '36px',
							height: '36px',
							margin: '0 auto',
						}}
					/>
					<p className="text-textGray pt-2">
						2015대한민국
						<br />
						마케팅대상 최우수상
					</p>
				</li>
			</ul>
		</div>
	);
};

export default MainFooter;
