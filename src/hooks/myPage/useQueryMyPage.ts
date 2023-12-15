import { getUserOrderInfo } from '../../apis/myPageAPI';
import { useQuery } from 'react-query';

const getMyPageData = async (i: number) => {
	try {
		if (i == 1) {
			i = 12;
		} else if (i == 2) {
			i = 24;
		}
		const currentDate = new Date();
		currentDate.setMonth(currentDate.getMonth() - i);
		const { data } = await getUserOrderInfo();
		const filteredData = data?.filter(
			(order: { orderItems: any[]; orderDate: string | number | Date }) => {
				return order.orderItems?.some(() => {
					const criteria = new Date(order.orderDate);
					return criteria >= currentDate;
				});
			},
		);
		return filteredData;
	} catch (error) {
		console.log(error);
	}
};

const useQueryMyPage = (i: number) => {
	const { data, isLoading } = useQuery(
		[`myPage/${i}`],
		() => getMyPageData(i),
		{
			staleTime: 60000,
		},
	);
	return { data, isLoading };
};

export default useQueryMyPage;
