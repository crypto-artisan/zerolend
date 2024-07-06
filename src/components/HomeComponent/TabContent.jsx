import { IoIosSearch } from "react-icons/io";
import CoinRecord from '../../assets/CoinRecord.json'
import { useNavigate } from "react-router-dom";


export default function TabContent(props) {

    const tab = props.tab
    const navigate = useNavigate()

    const handleViewCrypto = () => {
        navigate('/cryptoView')
    }

    return <>
        <div class="">
            <div class="mt-3 relative rounded-sm border border-black border-opacity-25 shadow-md bg-white mb-10">
                <div id="panel-1" class={tab === 1 ? "block" : "hidden"}>
                    <div className="flex justify-between items-center px-6 py-3">
                        <h2 class="text-xl font-semibold text-[var(--secondary-color)]">Linea assets</h2>
                        <div className="flex items-center border px-2 py-2 gap-2 border-opacity-90 rounded-sm">
                            <IoIosSearch className="text-[var(--secondary-color)] text-lg" />
                            <input type="search" className="min-w-80 w-full placeholder:text-sm border-none focus:outline-none text-sm text-gray-700" placeholder="Search asset name,Symbol,or a Address" />
                        </div>
                    </div>
                    <div className="bg-white px-6 py-3 mt-4">
                        <table className="w-full ">
                            <thead className="text-xs font-semibold text-[var(--secondary-color)] border-b  sticky top-[53px] bg-white">
                                <td className="p-2"> Asset</td>
                                <td className="text-center">Total supplied</td>
                                <td className="text-center">Supply APY</td>
                                <td className="text-center">Total borrowed</td>
                                <td className="text-center">Borrow APY, variable</td>
                                <td></td>
                            </thead>
                            <tbody>
                                {
                                    CoinRecord.map((item,index) => {
                                        return <tr className="border-b cursor-pointer" onClick={() => handleViewCrypto()}>
                                            <td className="py-2">
                                                <div className="flex gap-2 items-center py-1">
                                                    <img src={item.icon} alt="" className="w-7" />
                                                    <div>
                                                        <p className="text-base text-[var(--primary-color)] font-bold mb-1">{item.itemName}</p>
                                                        <p className="text-xs font-bold opacity-55 ">{item.itemSurname}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div className="text-center">
                                                    <p className="text-base font-semibold text-[var(--primary-color)]">{item.totalSupplied}K</p>
                                                    <p className="text-xs font-medium text-[var(--secondary-color)]">${item.supliedPrice}M</p>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div className="text-center grid align-middle">
                                                    <p className="text-base font-semibold text-[var(--primary-color)]">{item.supplyAPY.sTotalpercentage}%</p>
                                                    <div>
                                                        <p className="border  px-2 text-xs font-medium text-[var(--secondary-color)] cursor-pointer rounded-sm hover:border-black hover:border-opacity-50 inline-block"> {item.supplyAPY.sRewards}%</p>
                                                    </div>
                                                  
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div className="text-center">
                                                    <p className="text-base font-semibold text-[var(--primary-color)]">{item.totalBorrowed}k</p>
                                                    <p className="text-xs font-medium text-[var(--secondary-color)]">${item.borrowedPrice}M</p>
                                                </div>
                                            </td>
                                            <td className="py-2">
                                                <div className="text-center grid align-middle">
                                                    <p className="text-base font-semibold text-[var(--primary-color)]">{item.borrowAPY.bTotalpercentage}%</p>
                                                    <div>
                                                        <p className="border  px-2 text-xs font-medium text-[var(--secondary-color)] cursor-pointer rounded-sm hover:border-black hover:border-opacity-50 inline-block"> {item.borrowAPY.bRewards}%</p>
                                                    </div>
                                                   
                                                </div>
                                            </td>
                                            <td className="text-center py-2">
                                                <div className="border px-3 py-2 rounded-sm hover:border-black hover:bg-grey-400 inline-block cursor-pointer text-sm font-bold text-[var(--secondary-color)]">
                                                    Details
                                                </div>
                                            </td>
                                        </tr>

                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div id="panel-2" class={tab === 2 ? "block" : "hidden"}>
                   <div className="p-5">
                   <h2 class="text-xl font-semibold text-gray-800">Second tab panel</h2>
                   <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
                   </div>
                </div>

            </div>
        </div>
    </>

}