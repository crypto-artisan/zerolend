import { Link } from "react-router-dom";

// icons
import { IoWalletOutline } from "react-icons/io5";
import { MdOutlineInfo } from "react-icons/md";

export default function CryptoTab() {
    return <>
        <div className="grid grid-cols-3 gap-5 ">
            <div className="bg-white rounded-md col-span-2 px-6 py-3">
                <div className="flex justify-between items-center ">
                    <h2 class="text-lg font-semibold text-[var(--secondary-color)]">Reserve status & configuration</h2>

                </div>
                <div className="grid grid-cols-4 mt-10 pb-10 border-b">
                    <div className="col-span-1">
                        <p className="text-sm font-semibold text-[var(--secondary-color)]">Supply Info</p>
                    </div>
                    <div className="col-span-3 grid grid-rows-2 gap-5">
                        <div className="flex gap-10">
                            <div>
                                <p>Total supplied</p>
                                <p className="text-base font-semibold text-[var(--primary-color)]">22.92K</p>
                                <p className="text-xs font-medium text-[var(--secondary-color)]">$79.20M</p>
                            </div>
                            <div>
                                <p>Total supplied</p>
                                <p className="text-base font-semibold text-[var(--primary-color)]">2.59%</p>
                                <p className="text-xs font-medium text-[var(--secondary-color)]">0.23%</p>

                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--secondary-color)]">Collateral usage</p>
                            <div className="flex flex-wrap gap-4 text-sm mt-3">
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-4 mt-10 pb-10 border-b">
                    <div className="col-span-1">
                        <p className="text-sm font-semibold text-[var(--secondary-color)]">Borrow info</p>
                    </div>
                    <div className="col-span-3 grid grid-rows-2 gap-5">
                        <div className="flex gap-10">
                            <div>
                                <p>Total supplied</p>
                                <p className="text-base font-semibold text-[var(--primary-color)]">22.92K</p>
                                <p className="text-xs font-medium text-[var(--secondary-color)]">$79.20M</p>
                            </div>
                            <div>
                                <p>Total supplied</p>
                                <p className="text-base font-semibold text-[var(--primary-color)]">2.59%</p>
                                <p className="text-xs font-medium text-[var(--secondary-color)]">0.23%</p>

                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-[var(--secondary-color)]">Collector Info</p>
                            <div className="flex flex-wrap gap-4 text-sm mt-3">
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>
                                <div className="border border-gray-300 rounded-md p-1 grow">
                                    <p className="opacity-80 font-medium">Max LTV</p>
                                    <p className="font-semibold opacity-85">80.00 %</p>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col-span-1 h-full">
                <div className="bg-white rounded-md px-6 pt-3 pb-8">
                    <h2 class="text-lg font-semibold text-[var(--secondary-color)]">Your info</h2>
                    <div className="mt-10">
                        <div className="flex gap-4 pb-5 border-b">
                            <div className="border p-3 rounded-xl bg-gray-100">
                                <IoWalletOutline className="text-2xl" />
                            </div>
                            <div>
                                <p className="font-normal">Wallet Balance</p>
                                <p className="font-medium text-lg">0 DAI</p>
                            </div>

                        </div>
                        <div className="pt-5 flex justify-between items-end">
                            <div>
                                <p className="font-normal">Available to supply <span><MdOutlineInfo className="inline-block opacity-45 cursor-pointer" /></span></p>
                                <p className="font-medium text-lg">0 DAI</p>
                                <p className="opacity-65">$ 0</p>
                            </div>
                            <div>
                                <button className="border px-6 py-2 text-base font-bold bg-gray-100 rounded-md text-gray-500 text-opacity-70">Supply</button>
                            </div>
                        </div>

                        <div className="pt-5 flex justify-between items-end">
                            <div>
                                <p className="font-normal ">Available to borrow <span><MdOutlineInfo className="inline-block opacity-45 cursor-pointer" /></span></p>
                                <p className="font-medium text-lg">0 DAI</p>
                                <p className="opacity-65">$ 0</p>
                            </div>
                            <div>
                                <button className="border px-6 py-2 text-base font-bold bg-gray-100 rounded-md text-gray-500 text-opacity-70">Borrow</button>
                            </div>
                        </div>
                        <div className="mt-3 bg-green-100 p-2 rounded-md ">
                            <p className="text-xs font-medium">Your linea wallet is empty. purchase or transfer assets or use <Link className="underline font-semibold">Linea Bridge</Link> to transfer your Ethereum assets.</p>
                        </div>

                        {/* <div className="mt-10">
                            <button className="bg-[var(--primary-color)] py-2  px-3 rounded-md text-white font-medium text-sm flex gap-1 items-center">Connect Wallet</button>

                        </div> */}
                    </div>

                </div>
            </div>
        </div>
    </>
}