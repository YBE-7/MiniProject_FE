import React from 'react';
import CheckIcon from '@mui/icons-material/Check';

interface ServicesProps {
    services: string[] | undefined;
}

export default function Services( { services } : ServicesProps) {
	return (
		<div className="pt-5 pb-3">
			<div className="min-h-[3rem] flex items-center">
				<p className="text-title font-bold">시실 및 서비스</p>
			</div>
			<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-secondaryTextGray">
				{services&&services.map((service, index) => (
					<div className="flex items-center " key={index}>
						<CheckIcon sx={{ fontSize: '16px' }} />
						<span className="pl-1">{service}</span>
					</div>
				))}
			</div>
		</div>
	);
}
