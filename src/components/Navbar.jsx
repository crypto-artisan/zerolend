import { Link } from "react-router-dom";
// icons
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { RiSettings2Fill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";


export default function Navbar() {
    return <>
        <header className="bg-[var(--primary-color)] py-2 px-5 my-auto flex justify-between sticky top-0 z-50">
            <div className="text-white flex items-center gap-3">
                <div className="border-lite rounded-md px-2 py-1 flex items-center cursor-pointer">
                    <span className="text-[0.60rem] font-medium flex items-center gap-1">TESTNET <FaCircleInfo /></span>
                </div>
                <div>
                    <ul className="flex gap-5 text-sm font-medium cursor-pointer">
                        <Link to={'/'}><li>Home</li></Link>
                        <li>Dashboard</li>
                        <li>Reward</li>
                        <li>Stake</li>
                        <li>Faucet</li>
                    </ul>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <button className="bg-[var(--secondary-color)] flex items-center gap-2 border-lite text-white text-sm font-semibold rounded-md px-3 py-2 hover:bg-transparent hover:transition-all">
                    Bridge <FaArrowRightArrowLeft />
                </button>
                <span className="text-sm font-medium text-white">Connect Wallet</span>
                <button className="bg-[var(--secondary-color)] flex items-center gap-2 border-lite text-white text-base font-semibold rounded-md px-3 py-2 hover:bg-transparent hover:transition-all">
                <RiSettings2Fill />
                </button>
            </div>
        </header>
    </>


}