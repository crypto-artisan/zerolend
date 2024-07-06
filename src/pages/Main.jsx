import BreadCamp from "../components/BreadCamp";
import { Link } from "react-router-dom";

export default function Main() {
    return <>
        <main >
            <div >
                <canvas className="gradient-background max-h-[28rem] -z-10 w-full absolute"></canvas>
                <BreadCamp bgColor={"#fff"} color={"var(--primary-color)"} breadTitle={"ZeroLend joins Linea's SURGE program ❤️."} breadSubtitle={`Join using this ${<Link>referral link</Link>}🚀 and earn 40% of any referral points that the protocol earns as a Liquidity Provider and 40% as a ZERO staker.`} />
                <BreadCamp bgColor={"#9b9b9b47"} color={"#fff"} breadTitle={"Farm Protocol Revenue in ETH and future Airdrops 🚀"} breadSubtitle={`Stake your ZERO/ETH LP tokens and earn up to -% in ETH plus farm future potential airdrops. Stake or Zap into LP tokens here.`} />

            </div>
        </main>
    </>
}