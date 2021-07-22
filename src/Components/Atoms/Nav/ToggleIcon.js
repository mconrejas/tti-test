import '@assets/styles/custom.css'

export default function ToggleIcon(props) {
    return (
        <div className={`hover-icon absolute top-7 w-7 flex-col cursor-pointer transition-all duration-500 ease-in-out ${props.active ? 'left-vw' : 'left-52'}`} onClick={() => { props.clickHandler() }}>
            <div className="h-0.5 bg-white rounded-sm mb-1.5 flex-1 transition-all duration-300 ease-in-out"></div>
            <div className="h-0.5 bg-white rounded-sm mb-1.5 flex-1 transition-all duration-300 ease-in-out"></div>
            <div className="h-0.5 bg-white rounded-sm mb-1.5 flex-1 transition-all duration-300 ease-in-out"></div>
        </div>
    );
}