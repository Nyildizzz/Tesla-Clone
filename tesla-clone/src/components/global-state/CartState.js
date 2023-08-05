// Make sure you have installed Recoil package through npm or yarn
import { atom } from 'recoil';

export const CartState = atom({
    key: 'cartState',
    default: [],
});
