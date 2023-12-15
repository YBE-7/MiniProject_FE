import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil';
import { checkInDateState } from 'recoil/atoms/dateAtom';

export default function useSetFreeCancleDate() {
    const checkInDate = useRecoilValue<Date>(checkInDateState);
    const [freeCancle, setFreeCancle] = useState(false);

    useEffect(() => {
        const isFreeCancle = () => {
            const date = new Date(checkInDate);
            const today = new Date();
            return (
                date.getFullYear() !== today.getFullYear() ||
                date.getMonth() !== today.getMonth() ||
                date.getDate() !== today.getDate()
            );
        };

        setFreeCancle(isFreeCancle());
    },[checkInDate]);

  return freeCancle;
}
