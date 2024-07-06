import CryptoTab from "../components/CryptoComponent/CryptoTab";
import PriceTag from "../components/PriceTag"
import { Link } from "react-router-dom";

// icons
import { IoArrowBack } from "react-icons/io5";


export default function CryptoView() {
    return <>
        <div className="pt-8 w-[85%] mx-auto">
            <div className="px-5">
                <div className="flex gap-3 items-center">
                    <Link to={'/'}>
                    <button className="bg-[var(--secondary-color)] flex items-center gap-2 border-lite text-white text-sm font-semibold rounded-md px-3 py-2 hover:bg-transparent hover:transition-all">
                        <IoArrowBack /> Go Back
                    </button>
                    </Link>
                    <div className="flex gap-2">
                        <img src="https://app.zerolend.xyz/icons/networks/linea.svg" alt="" className="w-6" />
                        <h1 className="text-white text-xl font-bold">Linea Market</h1>

                    </div>
                </div>
                <div className="mt-5 pb-10 flex items-center gap-10">
                    <div className="text-white flex items-center gap-3 leading-3">
                        <div>
                            <img src="https://app.zerolend.xyz/icons/tokens/dai.svg" className="w-8" alt="" />
                        </div>
                        <div>
                            <p className="opacity-40 text-sm">DAI</p>
                            <p className="text-2xl font-black">Dai Stablecoin</p>
                        </div>
                    </div>
                    <div className="border border-r border-gray-300 min-h-12 "></div>

                    <div className="flex gap-10">
                        <PriceTag pTitle={"Total market size"} color={"#ffffff96"} pSymbol={"$"} tPrice={"359.20M"} />
                        <PriceTag pTitle={"Total available"} color={"#ffffff96"} pSymbol={"$"} tPrice={"267.20M"} />
                        <PriceTag pTitle={"Total borrows"} color={"#ffffff96"} pSymbol={"$"} tPrice={"91.63M"} />
                        <PriceTag pTitle={"Linea LXP-L Referral Points"} color={"#00ffff"} pSymbol={"0"} tPrice={"Pts"} />
                    </div>
                </div>
            </div>
            <div>
                <CryptoTab />
            </div>
        </div>

    </>
}