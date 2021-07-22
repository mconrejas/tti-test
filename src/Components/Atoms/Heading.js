export function H2(props) {
    return (
        <h2 className={`normal-case text-2xl font-semibold mb-3 ${ props.class }`}>
            { props.text }
        </h2>
    );
}

export function H4(props) {
    return (
        <h4 className={`normal-case text-base font-semibold mb-1 ${ props.class }`}>
            { props.text }
        </h4>
    );
}

export function H5(props) {
    return (
        <h5 className={`normal-case text-sm font-extralight italic my-3 ${ props.class }`}>
            { props.text }
        </h5>
    );
}

export function H6(props) {
    return (
        <h6 className={`normal-case text-xs ${ props.class }`}>
            { props.text }
        </h6>
    );
}