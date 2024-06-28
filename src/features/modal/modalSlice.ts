import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ModalState {
    isOpen: boolean;
}

const initialState: ModalState = {
    isOpen: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setOpen: (state, action: PayloadAction<boolean>) => {
            state.isOpen = action.payload;
        },
    },
});

export const { setOpen } = modalSlice.actions;

export default modalSlice.reducer;
