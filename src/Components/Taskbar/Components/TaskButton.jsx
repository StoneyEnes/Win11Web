export default function TaskButton({icon, size = 6, onClick, hoverOption = false}) {
    return (
        <button onClick={onClick} className={`cursor-default ${hoverOption ? "hover:shadow-inner hover:bg-white/40 hover:shadow-white" : "pointer-events-none"}  rounded p-1.5`}>
            <img className={`w-6 h-6`} src={icon} alt=""/>
        </button>
    )
}