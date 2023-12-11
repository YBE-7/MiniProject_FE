const formatDate = (date: Date): string => {
	//년도 월, 일 박수 포함
	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: '2-digit',
		day: '2-digit',
		weekday: 'short',
	};

	const dateString = date.toLocaleDateString('ko-KR', options);

	const dateParts = dateString.match(/(\d{2}).(\d{2}).\s\((\S+)\)/);
	if (dateParts) {
		return `${dateParts[1]}.${dateParts[2]}(${dateParts[3]})`;
	}

	return dateString;
};

export const formatFullDateRange = (
	startDate: Date,
	endDate: Date | null,
): string => {
	if (endDate !== null) {
		const startFormatted = formatDate(startDate);
		const endFormatted = formatDate(endDate);
		const nightCount = Math.round(
			(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
		);

		return `${startFormatted}~${endFormatted}, ${nightCount}박`;
	} else return `${formatDate(startDate)} 체크인 검색`;
};

export const formatDateWithoutYear = (date: Date): string => {
	//월 일 박수 포함
	const options: Intl.DateTimeFormatOptions = {
		month: '2-digit',
		day: '2-digit',
		weekday: 'short',
	};

	const dateString = date.toLocaleDateString('ko-KR', options);

	const dateParts = dateString.match(/(\d{2}).(\d{2}).\s\((\S+)\)/);
	if (dateParts) {
		return `${dateParts[1]}.${dateParts[2]}(${dateParts[3]})`;
	}

	return dateString;
};

export const formatFullDateRangeWithoutYear = (
	startDate: Date,
	endDate: Date,
): string => {
	const startFormatted = formatDateWithoutYear(startDate);
	const endFormatted = formatDateWithoutYear(endDate);
	const nightCount = Math.round(
		(endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24),
	);
	return `${startFormatted}~${endFormatted}ㆍ${nightCount}박`;
};

const footerFormatDate = (date: Date): string => {
	//월.일
	const options: Intl.DateTimeFormatOptions = {
		month: '2-digit',
		day: '2-digit',
	};
	const dateString = date
		.toLocaleDateString('ko-KR', options)
		.replace(/(\.)/g, '');
	const dateParts = dateString.match(/(\d{2}).(\d{2})/);

	if (dateParts) {
		return `${dateParts[1]}.${dateParts[2]}`;
	}

	return dateString;
};

export const footerFormatFullDateRange = (
	startDate: Date,
	endDate: Date,
): string => {
	const startFormatted = footerFormatDate(startDate);

	const endFormatted = footerFormatDate(endDate);
	return `${startFormatted}~${endFormatted}`;
};

export const formatMonthDate = (start: Date, end: Date | null): string => {
	const startMonth = start.getMonth() + 1;
	const startDay = start.getDate();

	if (end !== null) {
		const endMonth = end.getMonth() + 1;
		const endDay = end.getDate();

		return `${startMonth}.${startDay} ~ ${endMonth}.${endDay}`;
	} else return `${startMonth}.${startDay}`;
};

export const foramtYYYYMMDD = (dateData: Date): string => {
	const year = dateData.getFullYear();
	const month = (dateData.getMonth() + 1).toString().padStart(2, '0');
	const day = dateData.getDate().toString().padStart(2, '0');
	return `${year}-${month}-${day}`;
};


const formatDateToMMDD = (date : Date) => {
	const month = date.getMonth() + 1; // getMonth()는 0부터 시작
	const day = date.getDate();
	return `${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')}`;
  };
  

export const getDayBeforeCheckIn = (checkInDate : Date) => {
    const date = new Date(checkInDate);
    date.setDate(date.getDate() - 1);
    return formatDateWithoutYear(date);

};

export const getDaysBeforeCheckIn = (checkInDate : Date, daysBefore : number) => {
	const date = new Date(checkInDate);
	date.setDate(date.getDate() - daysBefore);
	return formatDateToMMDD(date);
};

