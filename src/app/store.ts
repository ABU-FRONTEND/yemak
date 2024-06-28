import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../features/modal/modalSlice';

const store: any = configureStore({
    reducer: {
        modal: modalReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
