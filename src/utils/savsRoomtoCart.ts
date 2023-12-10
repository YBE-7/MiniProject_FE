import { postRoomToCart } from "apis/cartAPI";
import swal from "sweetalert";

const saveRoomtoCart = async (checkInDate : Date, checkOutDate : Date, roomId : number | undefined) => {
    try {
        const checkInDateString = checkInDate.toISOString().split('T')[0];
        const checkOutDateString = checkOutDate.toISOString().split('T')[0];
        if(roomId !== undefined) {
            const response = await postRoomToCart(
                roomId,
                checkInDateString,
                checkOutDateString,
            );
            if (response.status === 201) {
                swal({ title: '장바구니 담기에 성공하였습니다.', icon: 'success' });
            }

        }
        
    } catch (error) {
        swal({
            title: '실패',
            text: '장바구니에 담을 수 있는 개수를 초과하였습니다.',
            icon: 'error',
        });
        
    }
};

export default saveRoomtoCart;