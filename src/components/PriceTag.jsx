export default function PriceTag(props) {
    return <>

        <div className="text-white">
            <p className="opacity-65 font-normal text-sm">{props.pTitle}</p>
            <h1 className="text-xl font-bold flex gap-1"><span style={{color:props.color}}>{props.pSymbol}</span>{props.tPrice}</h1>
        </div>
        

    </>
}