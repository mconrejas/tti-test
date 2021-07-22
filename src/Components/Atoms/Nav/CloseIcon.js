export default function ToggleIcon(props) {
    return (
        <span className="text-5xl text-white font-extralight cursor-pointer" onClick={() => { props.clickHandler() }}>&#8249;</span>
    );
}