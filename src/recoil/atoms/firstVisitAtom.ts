import { atom } from 'recoil';

export const isFirstVisitState = atom({
	key: 'isFirstVisitState',
	default: true,
});
