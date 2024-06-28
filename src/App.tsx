import Header from "./components/Header/Header"
import { Register } from "./components/Register/Register"
const App: React.FC = (): JSX.Element => {
    return (
        <div className='text-[40px]'>
            <Header />
            <Register />
        </div>
    )
}
export default App
