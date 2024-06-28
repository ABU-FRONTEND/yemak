import { FC } from "react"
import { styles } from "../../styles"
import { useState } from "react"
<<<<<<< HEAD
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';
import { setOpen } from '../../features/modal/modalSlice';
const Header: FC = () => {
    const [isOpenInp, setIsOpenInp] = useState<boolean>(false)
    const dispatch = useDispatch<AppDispatch>();
    return (
        <header className=" bg-header flex items-center h-[400px] bg-no-repeat bg-cover" >
            <div className={`${styles.container} flex justify-between`}>
                <div className=" w-full max-w-[444px]">
                    <img src={`./src/assets/img/Logos.png`} alt="logo" className="pb-[15px]" />
                    <input type="text" onFocus={() => setIsOpenInp(true)} onBlur={() => setIsOpenInp(false)} placeholder="Restoran yoki taom nomi" className=" w-full h-[2.8rem] outline-none rounded-[6.4px] z-30 relative px-[1rem] text-[0.9rem]" />
                    {isOpenInp && <span className="absolute cursor-pointer top-0 right-0 w-full h-screen bg-[rgba(0,0,0,.5)]"></span>}
                </div>
                <div>
                    <button onClick={() => dispatch(setOpen(true))} className=" w-[10rem] font-semibold text-[1rem] h-[40px] rounded-[6px] py-[1px] bg-[#ffdd59]">Kirish</button>
                </div>
            </div>
        </header>
    )
=======
const Header: FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <header className=" bg-header flex items-center h-[400px] bg-no-repeat bg-cover" >
        <div className={`${styles.container} flex justify-between`}>
            <div className=" w-full max-w-[444px]">
            <img src={`./src/assets/img/Logos.png`} alt="logo" className="pb-[15px]" />
            <input type="text" onFocus={() => setIsOpen(true)} onBlur={() => setIsOpen(false)} placeholder="Restoran yoki taom nomi" className=" w-full h-[2.8rem] outline-none rounded-[6.4px] z-30 relative px-[1rem] text-[0.9rem]"/>
            {isOpen && <span className="absolute cursor-pointer top-0 right-0 w-full h-screen bg-[rgba(0,0,0,.5)]"></span>}
            </div>
            <div>
                <button className=" w-[10rem] font-semibold text-[1rem] h-[40px] rounded-[6px] py-[1px] bg-[#ffdd59]">Kirish</button>
            </div>
        </div>
    </header>
  )
>>>>>>> c6b7150d1e7b2dd2bff25fcec4944975c495cb4f
}

export default Header
