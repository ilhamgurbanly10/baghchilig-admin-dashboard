
const WhiteBiggerTitle = (props) => {

    const {className, children} = props;

    return (
        <h1 className={`white-bigger-title ${className}`}>
            {children}
        </h1>
    )

}

export default WhiteBiggerTitle;