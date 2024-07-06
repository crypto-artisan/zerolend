export default function Badge(props) {
    return <>
        <div>
            <p className="text-xs px-1 py-1 bg-green-200 inline-block font-medium text-opacity-40 rounded-md">{props.title}</p>
        </div>
    </>
}