
import PriceTag from "../components/PriceTag";
import TabContent from "../components/HomeComponent/TabContent";

// icons
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";




export default function HomePage() {

    const [tab ,setTab] = useState(1)

    const handleTab =(id)=>{
        setTab(id);
    }

    return <>
                <div className="pt-8 w-[85%] mx-auto">
                    <div className="px-5">
                        <div className="flex gap-3 items-center">
                            <img src="https://app.zerolend.xyz/icons/networks/linea.svg" alt="" className="w-8" />
                            <h1 className="text-white text-3xl font-bold">Linea Market</h1>
                            <FaAngleDown className="text-white text-2xl" />
                        </div>
                        <p className="text-sm text-white opacity-70 font-medium mt-1"> A powerful decentralized lending protocol. Lend/Borrow with high capital efficiency and low interest fees</p>

                        <div className="mt-7 pb-10 flex gap-10">
                            <PriceTag pTitle={"Total market size"} color={"#ffffff96"} pSymbol={"$"} tPrice={"359.20M"} />
                            <PriceTag pTitle={"Total available"} color={"#ffffff96"} pSymbol={"$"} tPrice={"267.20M"} />
                            <PriceTag pTitle={"Total borrows"} color={"#ffffff96"} pSymbol={"$"} tPrice={"91.63M"} />
                            <PriceTag pTitle={"Linea LXP-L Referral Points"} color={"#00ffff"} pSymbol={"0"} tPrice={"Pts"} />
                        </div>
                    </div>
                    <div>
                        <div class="relative w-max  h-12 grid grid-cols-3 items-center px-[3px] bg-gray-500/20 overflow-hidden shadow-2xl shadow-900/20 transition border-lite rounded-sm">
                           
                            <button  id="tab-1" class="relative block h-10 px-2 tab bg-white rounded-sm" onClick={()=>handleTab(1)}>
                                <span class="text-[var(--primary-color)] text-sm font-bold">Linea Main Market</span>
                            </button>
                            <button id="tab-2" class="relative block h-10 px-2 tab rounded-sm" onClick={()=>handleTab(2)}>
                                <span class=" text-sm font-bold text-white opacity-40">Crock Market</span>
                            </button>
                            <button id="tab-3" class="relative block h-10 px-2 tab rounded-sm" onClick={()=>handleTab(3)}>
                                <span class=" text-sm font-bold text-white opacity-40">Foxy Market</span>
                            </button>
                        </div>
                        <TabContent tab={tab}/>
                    </div>

                </div>

    </>
}