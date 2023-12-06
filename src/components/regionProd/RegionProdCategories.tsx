import React from 'react';
import { Link } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';
import { RegionProdProps } from 'types/RegionProd.type';
import styles from './RegionProd.module.css';

function RegionProdCategories({ region }: RegionProdProps) {
	return (
		<div className="flex gap-2 py-4">
			<div className={styles.linkItem}>
				<Link to={`/hotel/${region}`}>
					호텔 <KeyboardArrowRight />
				</Link>
			</div>
			<div className={styles.linkItem}>
				<Link to={`/resort/${region}`}>
					리조트 <KeyboardArrowRight />
				</Link>
			</div>
			<div className={styles.linkItem}>
				<Link to={`/pension/${region}`}>
					펜션 <KeyboardArrowRight />
				</Link>
			</div>
			<div className={styles.linkItem}>
				<Link to={`/pool_villa/${region}`}>
					풀빌라 <KeyboardArrowRight />
				</Link>
			</div>
		</div>
	);
}

export default RegionProdCategories;
