export default function Span(props) {
    return (
        <span className={`uppercase text-2xs ${props.class}`}>{props.text}</span>
    );
}