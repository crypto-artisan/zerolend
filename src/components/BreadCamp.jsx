
export default function BreadCamp(props){
    return<>
    <div className=" px-5 py-3" style={{backgroundColor:props.bgColor, backdropFilter:props.backdropFilter, color:props.color}}>
        <p className="text-sm font-semibold">{props.breadTitle}</p>
        <p className="text-xs font-normal mt-1">{props.breadSubtitle}</p>

    </div>
    </>
}