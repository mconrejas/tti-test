export default function Image(props) {
    return (
        <img src={props.source} alt="" srcSet={props.source} className="w-100 h-auto" />
    );
}