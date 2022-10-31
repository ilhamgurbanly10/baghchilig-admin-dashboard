
const GreyText = (props) => {

    const {className, children} = props;

    return (
        <p className={`grey-text ${className}`}>
            {children}
        </p>
    )

}

export default GreyText;