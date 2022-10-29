
const WhiteTitle = (props) => {

    const {className, children} = props;

    return (
        <h1 className={`white-title ${className}`}>
            {children}
        </h1>
    )

}

export default WhiteTitle;