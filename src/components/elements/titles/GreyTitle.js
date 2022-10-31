
const GreyTitle = (props) => {

    const {className, children} = props;

    return (
        <h3 className={`grey-title ${className}`}>
            {children}
        </h3>
    )

}

export default GreyTitle;