import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
}

interface MenusState {
    menus: MenuItem[];
}

const initialState: MenusState = {
    menus: [],
};

const menusSlice = createSlice({
    name: 'menus',
    initialState,
    reducers: {
        setMenus: (state, action: PayloadAction<MenuItem[]>) => {
            state.menus = action.payload;
        },
        addToCart: (state, action: PayloadAction<MenuItem>) => {
            state.menus.push(action.payload);
        },
    },
});

export const { setMenus, addToCart } = menusSlice.actions;
export default menusSlice.reducer;
