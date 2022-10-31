
const GreenTitle = (props) => {

    const {className, children} = props;

    return (
        <h2 className={`green-title ${className}`}>
            {children}
        </h2>
    )

}

export default GreenTitle;