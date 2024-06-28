import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../app/store';
import { setOpen } from '../../features/modal/modalSlice';


export const Register: React.FC = (): JSX.Element => {
    const isOpen = useSelector((state: RootState) => state.modal.isOpen);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            {isOpen ?
                <div className="absolute top-0 left-0 h-full w-full bg-[#0000004d] backdrop-blur-[5px] z-40 flex flex-col justify-center items-center">
                    <div className="flex flex-col w-[100%] max-w-[40%] p-[1rem] rounded-[6px] bg-white items-center h-[184px]">
                        <form className="flex flex-col w-full">
                            <div className="flex items-center justify-between">
                                <p className="text-[24px] font-[700] font-open-sans">Kirish</p>
                                <span onClick={() => dispatch(setOpen(false))} className="cursor-pointer bg-[#eee] rounded-full p-1">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke="RGBA(0,69,92,0.52)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </div>
                            <hr className="w-full h-0 my-3 border-0 border-t-[1px] border-[#eee]" />
                            <input className="w-full border-[1px] mb-[0.375rem] border-[#ccc] h-[48px] rounded-[6px] text-lg outline-none px-[1rem]" type="text" placeholder="+998 90 123 45 67" />
                            <button className="w-full h-[40px] rounded-[6px] text-lg bg-[#ffdd59] font-semibold">Tasdiqlash</button>
                        </form>
                    </div>
                </div>
                : null}
        </>
    )
}
